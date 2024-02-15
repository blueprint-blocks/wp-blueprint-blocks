import FieldLabel from '../FieldLabel'

import './style.css'

function TextareaField({ name, label, placeholder, onBlur, onFocus, tooltip, value, setValue }) {
	return (
		<div className="TextareaField">
			{ label && <FieldLabel htmlFor={ name } label={ label } tooltip={ tooltip } /> }
			<textarea
				name={ name }
				onChange={ ({ target }) => setValue(target.value) }
				placeholder={ placeholder }
				onBlur={ onBlur }
				onFocus={ onFocus }
				value={ value }
				rows="4"
			/>
		</div>
	)
}

export default TextareaField
