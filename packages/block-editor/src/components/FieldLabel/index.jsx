import Tooltip from '../Tooltip'

import './style.css'

function FieldLabel({ htmlFor, label, tooltip }) {
	return (
		<label className="FieldLabel" htmlFor={ htmlFor }>
			{ label }
			{ tooltip && <Tooltip text={ tooltip } /> }
		</label>
	)
}

export default FieldLabel
