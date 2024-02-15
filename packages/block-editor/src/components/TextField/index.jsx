import EditableString from '../EditableString'
import FieldLabel from '../FieldLabel'

import './style.css'

function TextField( {
	label,
	placeholder,
	onBlur,
	onFocus,
	tooltip,
	value,
	setValue,
} ) {

	return (
		<div className="TextField">
			{ label && (
				<FieldLabel
					label={ label }
					tooltip={ tooltip }
				/>
			) }
			<EditableString
				onBlur={ onBlur }
				onChange={ setValue }
				onFocus={ onFocus }
				placeholder={ placeholder }
				value={ value }
			/>
		</div>
	)

}

export default TextField
