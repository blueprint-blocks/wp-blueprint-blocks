import { useLayoutEffect, useCallback, useState } from 'react'
import { throttle } from '../functions'

function getScroll( ref ) {
	if ( !ref?.current ) {
		return {
			x: 0,
			y: 0,
		}
	}

	return {
		x: ref.current?.scrollLeft || 0,
		y: ref.current?.scrollTop || 0,
	}
}

function useScroll( ref ) {

	let timeout = null
	const [ scroll, setScroll ] = useState( getScroll( ref ) )

	const handleScroll = useCallback( () => {
		throttle( () => {
			if ( timeout ) {
				clearTimeout( timeout )
			}

			timeout = setTimeout( () => {
				// Update client scroll
				setScroll( getScroll( ref ) )
			}, 100 )
		}, 50 )()
	}, [ ref?.current?.scrollLeft, ref?.current?.scrollTop ] )

	useLayoutEffect( () => {
		if ( !ref?.current ) {
			return
		}

		handleScroll()

		window.addEventListener( 'resize', handleScroll )
		ref.current.addEventListener( 'scroll', handleScroll )

		return () => {
			window.removeEventListener( 'resize', handleScroll )
			ref.current.removeEventListener( 'scroll', handleScroll )
		}
	}, [ ref?.current ] )

	return scroll

}

export default useScroll
