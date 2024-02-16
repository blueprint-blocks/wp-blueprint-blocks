import { useDispatch, useSelector } from 'react-redux'

import { isProComponent } from '../../functions'
import { getComponentList, insertDraggingComponentAtPosition } from '../../store/block-blueprint'
import { showUpsellPrompt } from '../../store/upsell-prompt'

import BlueprintComponentList from '../BlueprintComponentList'

function BlueprintBlockEdit( {
	editorRef,
} ) {

	const dispatch = useDispatch()

	const components = useSelector( ( state ) => (
		getComponentList( state.blockBlueprint, 'edit' )
	) )

	const newDraggingComponent = useSelector( ( state ) => (
		state.blockBlueprint?.newDraggingComponent?.type || null
	) )

	const onDrop = ( { ancestry } ) => {
		if ( env.PRO_VERSION !== true && newDraggingComponent && isProComponent( newDraggingComponent ) ) {
			dispatch( showUpsellPrompt() )
		} else {
			dispatch( insertDraggingComponentAtPosition( {
				context: 'edit',
				position: ancestry,
			} ) )
		}
	}

	return (
		<BlueprintComponentList
			isRoot={ true }
			allowMultiple={ false }
			hintText={ `Drag components here to begin building your block.` }
			components={ components }
			editorRef={ editorRef }
			onDrop={ onDrop }
		/>
	)

}

export default BlueprintBlockEdit
