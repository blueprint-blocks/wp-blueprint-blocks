import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getBlockClassName } from '../../store/block-json'
import { setEditorCss } from '../../store/block-editor-css'

import CssEditor from '../CssEditor'
import CssSidebar from '../CssSidebar'

import './style.css'

function PageEditorCss( { } ) {

	const dispatch = useDispatch()

	const ref = useRef()

	const [ selectionRange, setSelectionRange ] = useState( {
		from: 0,
		to: 0,
	} )

	const className = useSelector( ( state ) => {
		return getBlockClassName( state.blockJson || {} )
	} )

	const cssValue = useSelector( ( state ) => (
		state.blockEditorCss.raw
	) )

	const defaultValue = `.${ className } {
	// Add styles here that should by used wherever the block is displayed
}`

	const onChange = ( value ) => {
		dispatch( setEditorCss( value ) )
	}

	const onSelectionChange = ( range ) => {
		setSelectionRange( range )
	}

	const onInsertVariable = ( variableName ) => {
		const insertVariable = `var(${ variableName })`

		if ( ref?.current?.state && ref?.current?.view ) {
			const newCss = cssValue.slice( 0, selectionRange.from ) + insertVariable + cssValue.slice( selectionRange.to )

			dispatch( setEditorCss( newCss ) )

			setTimeout( () => {
				ref.current.view.focus()

				ref.current.view.dispatch( {
					selection: {
						anchor: ( selectionRange.from + insertVariable.length ),
						head: ( selectionRange.from + insertVariable.length ),
					},
				} )
			}, 0 )
		}
	}

	return (
		<div className="PageEditorCss">
			<div className="PageEditorCss-view">
				<CssEditor
					ref={ ref }
					onSelectionChange={ onSelectionChange }
					onChange={ onChange }
					defaultValue={ defaultValue }
					value={ cssValue }
				/>
				<CssSidebar
					onInsertVariable={ onInsertVariable }
				/>
			</div>
		</div>
	)
}

export default PageEditorCss
