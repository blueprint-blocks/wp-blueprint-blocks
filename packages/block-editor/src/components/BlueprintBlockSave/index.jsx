import { useDispatch, useSelector } from 'react-redux'

import { isProComponent } from '../../functions'

import {
	getComponentList,
	insertDraggingComponentAtPosition,
	insertNewComponentAtPosition
} from '../../store/block-blueprint'

import { showUpsellPrompt } from '../../store/upsell-prompt'

import BlueprintComponentList from '../BlueprintComponentList'

function BlueprintBlockSidebar( {
	editorRef,
} ) {

	const dispatch = useDispatch()

	const components = useSelector( ( state ) => (
		getComponentList( state.blockBlueprint, 'save' )
	) )

	const newDraggingComponent = useSelector( ( state ) => (
		state.blockBlueprint?.newDraggingComponent?.type || null
	) )

	const onDrop = ( { ancestry } ) => {
		if ( env.PRO_VERSION !== true && newDraggingComponent && isProComponent( newDraggingComponent ) ) {
			dispatch( showUpsellPrompt() )
		} else if ( Array.isArray( components ) && components.length === 0 ) {
			dispatch( insertNewComponentAtPosition( {
				context: 'save',
				component: {
					tagName: 'div',
				},
				position: [ 0 ],
			} ) )

			dispatch( insertDraggingComponentAtPosition( {
				context: 'save',
				position: [ 0, 0 ],
			} ) )
		} else {
			dispatch( insertDraggingComponentAtPosition( {
				context: 'save',
				position: ancestry,
			} ) )
		}
	}

	return (
		<BlueprintComponentList
			isRoot={ true }
			allowMultiple={ false }
			hintText={ `Drag components here if you'd like your block to save markup differently from the edit context.` }
			components={ components }
			editorRef={ editorRef }
			onDrop={ onDrop }
		/>
	)

}

export default BlueprintBlockSidebar
