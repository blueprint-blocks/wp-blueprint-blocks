import { useLayoutEffect, useState } from 'react'
import useRect from './use-rect'

function useMouseFocus( ref ) {

	const [ hasMouseFocus, setHasMouseFocus ] = useState( false )
	const rect = useRect( ref )

	useLayoutEffect( () => {
		function handleMouseMove( { clientX, clientY } ) {
			const isInsideBounds = (
				clientX >= rect?.left &&
				clientX <= rect?.right &&
				clientY >= rect?.top &&
				clientY <= rect?.bottom
			)

			if ( isInsideBounds === true && hasMouseFocus === false ) {
				setHasMouseFocus( true )
			} else if ( isInsideBounds === false && hasMouseFocus === true ) {
				setHasMouseFocus( false )
			}
		}

		window.addEventListener( 'mousemove', handleMouseMove )

		return () => {
			window.removeEventListener( 'mousemove', handleMouseMove )
		}
	}, [ hasMouseFocus, rect ] )

	return hasMouseFocus

}

export default useMouseFocus
