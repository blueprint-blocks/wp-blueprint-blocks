import { forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useDebugRenderCount } from '../../hooks'
import { addAttribute } from '../../store/block-json'

import BlueprintAttribute from '../BlueprintAttribute'
import BlueprintHint from '../BlueprintHint'

import './style.css'

const BlueprintAttributeList = forwardRef( ( {
	editorRef = null,
}, ref ) => {

	const dispatch = useDispatch()

	const { attributes } = useSelector( ( state ) => {
		return state.blockJson || {}
	} )

	function onClickAdd() {
		dispatch( addAttribute( {} ) )
	}

	if ( process.env.NODE_ENV === 'development' ) {
		useDebugRenderCount( 'BlueprintAttributeList' )
	}

	return (
		<div ref={ ref } className="BlueprintAttributeList">
			{ Object.entries( attributes ).length > 0 && (
				<div className="BlueprintAttributeList-list">
					{ Object.entries( attributes ).map( ( [ attributeName, attributeProps ], index ) => (
						<BlueprintAttribute
							key={ index }
							editorRef={ editorRef }
							attributeName={ attributeName }
							attributeType={ attributeProps?.type }
							attributeDefault={ attributeProps?.default }
						/>
					) ) }
				</div>
			) }
			{ Object.entries( attributes ).length === 0 && (
				<BlueprintHint
					text={ `Add attributes for values that you'd like to be saved upon update.` }
					editorRef={ editorRef }
				/>
			) }
			<div className="BlueprintAttributeList-add" onClick={ onClickAdd }>
				{ 'Add attribute' }
			</div>
		</div>
	)

} )

export default BlueprintAttributeList
