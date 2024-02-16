import { useDispatch, useSelector } from 'react-redux'

import { isProComponent } from '../../functions'
import { getComponentList, insertDraggingComponentAtPosition } from '../../store/block-blueprint'
import { showUpsellPrompt } from '../../store/upsell-prompt'

import BlueprintComponentList from '../BlueprintComponentList'

function BlueprintBlockSidebar( {
	editorRef,
} ) {

	const dispatch = useDispatch()

	const components = useSelector( ( state ) => (
		getComponentList( state.blockBlueprint, 'sidebar' )
	) )

	const newDraggingComponent = useSelector( ( state ) => (
		state.blockBlueprint?.newDraggingComponent?.type || null
	) )

	const onDrop = ( { ancestry } ) => {
		if ( env.PRO_VERSION !== true && newDraggingComponent && isProComponent( newDraggingComponent ) ) {
			dispatch( showUpsellPrompt() )
		} else {
			dispatch( insertDraggingComponentAtPosition( {
				context: 'sidebar',
				position: ancestry,
			} ) )
		}
	}

	return (
		<BlueprintComponentList
			isRoot={ true }
			allowMultiple={ false }
			hintText={ `Drag components here that you'd like to display in the block sidebar.` }
			components={ components }
			editorRef={ editorRef }
			onDrop={ onDrop }
		/>
	)

}

export default BlueprintBlockSidebar
