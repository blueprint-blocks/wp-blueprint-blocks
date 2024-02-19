import classNames from 'classnames'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import Draggable from 'react-draggable'

import ProFlag from '../ProFlag'

import { useRect } from '../../hooks'
import { startDraggingNewComponent, stopDragging, unsetDraggingComponent } from '../../store/block-blueprint'

import './style.css'

function BlueprintSidebarItem( {
	label,
	shortDescription,
	editorRef = null,
	type = 'html',
	defaultAttributes = {},
	pro = false,
} ) {

	const dispatch = useDispatch()

	const ref = useRef( null )
	const rect = useRect( ref )

	const editorRect = useRef( editorRef )

	const [ position, setPosition ] = useState( {
		x: 0,
		y: 0,
	} )

	const onStartDrag = () => {
		dispatch( startDraggingNewComponent( {
			...defaultAttributes,
			type,
		} ) )
	}

	const onStopDrag = () => {
		setPosition( { x: 0, y: 0 } )
		dispatch( stopDragging() )
		// this is done at the end of the browser render to
		// allow pickup by insert or hint components
		setTimeout( () => {
			dispatch( unsetDraggingComponent() )
		}, 0 )
	}

	return (
		<div ref={ ref } className={ classNames( 'BlueprintSidebarItem', {
			'is-html': ( type === 'html' ),
		} ) }>
			<div>
				<div>
					<div className="BlueprintSidebarItem-label">
						{ label }
					</div>
					<div className="BlueprintSidebarItem-description">
						{ shortDescription }
					</div>
					<Draggable
						axis="both"
						bounds={ {
							bottom: ( editorRect.bottom - rect.bottom ),
							left: ( editorRect.left - rect.left ),
							right: ( editorRect.right - rect.right ),
							top: ( editorRect.top - rect.top ),
						} }
						position={ position }
						onStart={ onStartDrag }
						onStop={ onStopDrag }
					>
						<div className={ classNames( 'BlueprintSidebarItem', 'is-clone', {
							'is-html': ( type === 'html' ),
						} ) }>
							<div>
								<div>
									<div className="BlueprintSidebarItem-label">
										{ label }
									</div>
									<div className="BlueprintSidebarItem-description">
										{ shortDescription }
									</div>
								</div>
							</div>
						</div>
					</Draggable>
				</div>
			</div>
		</div>
	)
}

export default BlueprintSidebarItem
