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
	)

}

export default DashiconsField
