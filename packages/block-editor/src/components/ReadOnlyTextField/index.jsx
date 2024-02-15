import FieldLabel from '../FieldLabel'

import './style.css'

function ReadOnlyTextField({ name, label, onEdit, tooltip, value }) {
	return (
		<div className="ReadOnlyTextField">
			{ label && <FieldLabel htmlFor={ name } label={ label } tooltip={ tooltip } /> }
			<div className="ReadOnlyTextField-value">
				<div>{ value }</div>
				<div className="ReadOnlyTextField-edit" onClick={ onEdit }>
					<i className="fa-solid fa-pencil"></i>
				</div>
			</div>
		</div>
	)
}

export default ReadOnlyTextField
