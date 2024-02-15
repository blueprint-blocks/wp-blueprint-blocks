import classNames from 'classnames'
import { memo, useCallback, useMemo, useRef, useState } from 'react'
import ContentEditable from 'react-contenteditable'
import { applyFilters } from '@wordpress/hooks'

import './style.css'

const EditableString = memo( ( {
	className = '',
	onChange,
	onDelete,
	onFocus,
	onBlur,
	placeholder = '',
	value = '',
} ) => {

	const ref = useRef( null )
	const contentRef = useRef( null )
	const [ hasFocus, setHasFocus ] = useState( false )

	const _value = useMemo( () => (
		String( value || '' )
	), [ value ] )

	const html = applyFilters( 'blueprint-blocks.editable-string.value.before-render', _value )

	const _onBlur = () => {
		setHasFocus( false )
		onBlur && onBlur()
	}

	const _onChange = ( { target } ) => {
		let newValue = String( target?.value || '' ).replace( /\n/g, ' ' )
		newValue = applyFilters( 'blueprint-blocks.editable-string.value.before-on-change', newValue )
		onChange && onChange( newValue )
	}

	const _onFocus = () => {
		setHasFocus( true )
		onFocus && onFocus()
	}

	const onKeyDown = useCallback( ( event ) => {
		if ( event.key === 'Backspace' && _value.length === 0 ) {
			onDelete && onDelete()
		}
	}, [ _value ] )

	return (
		<div
			ref={ ref }
			data-testid="editable-string"
			className={ classNames( 'EditableString', className, {
				'has-focus': hasFocus,
				'has-value': ( _value.length > 0 ),
			} ) }
			onKeyDown={ onKeyDown }
		>
			{ ( _value.length === 0 ) && (
				<div className="placeholder" data-testid="editable-string/placeholder">
					{ placeholder }
				</div>
			) }
			<ContentEditable
				data-testid="editable-string/content-editable"
				innerRef={ contentRef }
				html={ html }
				onChange={ _onChange }
				onBlur={ _onBlur }
				onFocus={ _onFocus }
				onKeyDown={ ( event ) => {
					if ( event.key === 'Enter' ) {
						event.preventDefault()
						event.stopPropagation()
					}
				} }
			/>
		</div>
	)

} )

export default EditableString
