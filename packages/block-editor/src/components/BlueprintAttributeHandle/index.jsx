import { useId, useLayoutEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { useRect } from '../../hooks'
import { setPosition, removePosition } from '../../store/attribute-handles'

import './style.css'

function BlueprintAttributeHandle( {
	editorRef = null,
	clientId = null,
	componentId = null,
	attributeName,
	context = 'to',
	isClone = false,
	isDragging = false,
	draggingOffset = { x: 0, y: 0 },
	...props
} ) {

	const id = useId()
	const ref = useRef( null )
	const rect = useRect( ref, editorRef, [ 'x', 'y', 'height', 'width' ] )

	const dispatch = useDispatch()

	const [ name, setName ] = useState( attributeName )

	useLayoutEffect( () => {
		if ( ( isClone && !isDragging ) || ( !isClone && isDragging ) ) {
			dispatch( removePosition( {
				name,
				id: ( clientId || id ),
			} ) )
		} else {
			dispatch( setPosition( {
				name,
				id: ( clientId || id ),
				componentId,
				context: ( context === 'from' && 'from' || 'to' ),
				x: ( ( rect.x + ( rect.width / 2 ) ) + draggingOffset.x ),
				y: ( ( rect.y + ( rect.height / 2 ) ) + draggingOffset.y ),
			} ) )
		}
	}, [ name, rect, draggingOffset, isClone, isDragging ] )

	useLayoutEffect( () => {
		if ( attributeName !== name ) {
			dispatch( removePosition( {
				name,
				id: ( clientId || id ),
			} ) )
		}

		setName( attributeName )
	}, [ attributeName ] )

	useLayoutEffect( () => {
		ref.current.classList.toggle( 'hide', ( isClone && !isDragging ) || ( !isClone && isDragging ) )
	}, [ isClone, isDragging ] )

	return (
		<div
			ref={ ref }
			className={ `BlueprintAttributeHandle is-${ props?.position === 'right' && 'right' || 'left' }` }
		/>
	)

}

export default BlueprintAttributeHandle
