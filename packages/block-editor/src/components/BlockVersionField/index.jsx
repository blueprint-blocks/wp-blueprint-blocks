import EditableString from '../EditableString'

import './style.css'

function BlockVersionField( {
	name,
	placeholder,
	onBlur,
	onFocus,
	tooltip,
	value,
	setValue,
} ) {
	return (
		<div className="BlockVersionField">
			<div className="BlockVersionField-label">{ 'Version:' }</div>
			<EditableString
				className="BlockVersionField-value"
				value={ '1.0.0' }
			/>
		</div>
	)
}

export default BlockVersionField
