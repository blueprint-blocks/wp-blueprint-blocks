import FieldLabel from '../FieldLabel'

import './style.css'

function TextField({ name, label, placeholder, onBlur, onFocus, tooltip, value, setValue }) {
	return (
		<div className="TextField">
			{ label && <FieldLabel htmlFor={ name } label={ label } tooltip={ tooltip } /> }
			<input
				type="text"
				name={ name }
				onChange={ ({ target }) => setValue(target.value) }
				placeholder={ placeholder }
				value={ value }
				onBlur={ onBlur }
				onFocus={ onFocus }
			/>
		</div>
	)
}

export default TextField
