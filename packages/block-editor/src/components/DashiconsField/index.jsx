import SearchSelectField from '../SearchSelectField'

import { dashicons } from '../../data'

import './style.css'

function DashiconsField( {
	name,
	label,
	onBlur,
	onFocus,
	tooltip,
	value,
	setValue,
} ) {

	return (
		<div className="DashiconsField">
			<span className="dashicons dashicons-hammer" />
			{ false && (
				<SearchSelectField
					name={ name }
					label={ label }
					onBlur={ onBlur }
					onFocus={ onFocus }
					options={ dashicons }
					tooltip={ tooltip }
					setValue={ setValue }
					value={ value }
				/>
			) }
		</div>
	)

}

export default DashiconsField
