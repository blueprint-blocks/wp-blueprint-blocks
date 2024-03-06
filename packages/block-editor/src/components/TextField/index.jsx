import clsx from "clsx"

import EditableString from '../EditableString'
import FieldLabel from '../FieldLabel'

import './style.css'

function TextField( {
	allowEnter = false,
	disabled = false,
	label,
	multiLine = false,
	onBlur,
	onFocus,
	placeholder,
	rows = 1,
	tooltip,
	value = '',
	setValue,
} ) {

	return (
		<div className={ clsx( 'TextField', { 'is-disabled': disabled } ) }>
			{ label && (
				<FieldLabel
					label={ label }
					tooltip={ tooltip }
				/>
			) }
			{ disabled && value.length === 0 && (
				<div class="TextField-placeholder">
					{ placeholder }
				</div>
			) }
			{ disabled && value.length > 0 && (
				<div class="TextField-value">
					{ value }
				</div>
			) }
			{ !disabled && (
				<EditableString
					allowEnter={ allowEnter }
					multiLine={ multiLine }
					onBlur={ onBlur }
					onChange={ setValue }
					onFocus={ onFocus }
					placeholder={ placeholder }
					rows={ rows }
					value={ value }
				/>
			) }
		</div>
	)

}

export default TextField
