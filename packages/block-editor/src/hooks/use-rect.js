import { useEffect, useLayoutEffect, useState } from 'react'
import { throttle } from '../functions'

function isEqual( rect1, rect2 ) {
	return (
		rect1.x === rect2.x &&
		rect1.y === rect2.y &&
		rect1.top === rect2.top &&
		rect1.right === rect2.right &&
		rect1.bottom === rect2.bottom &&
		rect1.left === rect2.left &&
		rect1.height === rect2.height &&
		rect1.width === rect2.width
	)
}

function getRect( rect = {}, parentRect = null, parentScroll = {} ) {
	let {
		x = 0,
		y = 0,
		top = 0,
		right = 0,
		bottom = 0,
		left = 0,
		width = 0,
		height = 0,
	} = rect

	if ( parentRect ) {
		x -= ( parentRect.x - parentScroll?.x ) || 0
		y -= ( parentRect.y - parentScroll?.y ) || 0
		top -= ( parentRect.top - parentScroll?.y ) || 0
		right -= ( parentRect.left - parentScroll?.x ) || 0
		bottom -= ( parentRect.top - parentScroll?.y ) || 0
		left -= ( parentRect.left - parentScroll?.x ) || 0
	}

	return {
		x:      ( Math.round( ( x + Number.EPSILON ) * 100 ) / 100 ),
		y:      ( Math.round( ( y + Number.EPSILON ) * 100 ) / 100 ),
		top:    ( Math.round( ( top + Number.EPSILON ) * 100 ) / 100 ),
		right:  ( Math.round( ( right + Number.EPSILON ) * 100 ) / 100 ),
		bottom: ( Math.round( ( bottom + Number.EPSILON ) * 100 ) / 100 ),
		left:   ( Math.round( ( left + Number.EPSILON ) * 100 ) / 100 ),
		width:  ( Math.round( ( width + Number.EPSILON ) * 100 ) / 100 ),
		height: ( Math.round( ( height + Number.EPSILON ) * 100 ) / 100 ),
	}
}

function reduceRect( rect, reduceProps = null ) {
	if ( reduceProps === null ) {
		return rect
	}

	return Object.fromEntries( Object.entries( rect ).filter( ( [ key, value ] ) => (
		reduceProps.includes( key )
	) ) )
}

function useRect( ref, parentRef, reduceProps = null ) {

	let timeout = null
	const [ rect, setRect ] = useState( {} )

	function handleResize() {
		throttle( () => {
			if ( timeout ) {
				clearTimeout( timeout )
			}

			timeout = setTimeout( () => {
				let newRect = getRect(
					ref.current?.getBoundingClientRect(),
					parentRef?.current?.getBoundingClientRect(),
					{
						x: parentRef?.current?.scrollLeft || 0,
						y: parentRef?.current?.scrollTop || 0,
					}
				)

				newRect = reduceRect( newRect, reduceProps )

				if ( !isEqual( rect, newRect ) ) {
					setRect( newRect )
				}
			}, 100 )
		}, 50 )()
	}

	useEffect( () => {
		if ( !ref?.current ) {
			return
		}

		const observer = new IntersectionObserver( ( [ entry, parentEntry = null ] ) => {
			if ( parentRef?.current && !parentEntry ) {
				return
			}

			let newRect = getRect(
				entry?.boundingClientRect,
				parentEntry?.boundingClientRect,
				{
					x: parentEntry?.target?.scrollLeft || 0,
					y: parentEntry?.target?.scrollTop || 0,
				}
			)

			newRect = reduceRect( newRect, reduceProps )

			if ( !isEqual( rect, newRect ) ) {
				setRect( newRect )
			}
		} )

		observer.observe( ref.current )

		if ( parentRef?.current ) {
			observer.observe( parentRef.current )
		}

		return () => {
			observer.disconnect()
		}
	}, [ ref, parentRef, rect ] )

	useLayoutEffect( () => {

		window.addEventListener( 'mousedown', handleResize, true )
		window.addEventListener( 'resize', handleResize )
		window.addEventListener( 'orientationchange', handleResize )
		window.addEventListener( 'scroll', handleResize, true )

		return () => {
			window.removeEventListener( 'mousedown', handleResize, true )
			window.removeEventListener( 'resize', handleResize )
			window.removeEventListener( 'orientationchange', handleResize )
			window.removeEventListener( 'scroll', handleResize, true )
		}

	}, [ ref, parentRef, rect ] )

	return rect
}

export default useRect
