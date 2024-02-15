import { useDispatch, useSelector } from 'react-redux'

import { getComponentList, insertDraggingComponentAtPosition } from '../../store/block-blueprint'

import BlueprintComponentList from '../BlueprintComponentList'

function BlueprintBlockEdit( {
	editorRef,
} ) {

	const dispatch = useDispatch()

	const components = useSelector( ( state ) => (
		getComponentList( state.blockBlueprint, 'edit' )
	) )

	const onDrop = ( { ancestry } ) => {
		dispatch( insertDraggingComponentAtPosition( {
			context: 'edit',
			position: ancestry,
		} ) )
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
