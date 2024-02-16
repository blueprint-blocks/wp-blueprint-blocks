import classNames from 'classnames'

import './style.css'

function CheckboxField( {
	children,
	label,
	size = '',
	tooltip,
	value = false,
	setValue,
} ) {

	const onChange = ( event ) => {
		setValue( event.target?.checked || false )
	}

	return (
		<div className={ classNames( 'CheckboxField', {
			'is-checked': ( value === true ),
			'is-small': ( size === 'small' ),
		} ) }>
			<div className={ classNames( 'CheckboxField-checkbox' ) }>
				<input type="checkbox" value="1" checked={ value } onChange={ onChange } />
			</div>
			<div className={ classNames( 'CheckboxField-content' ) }>
				{ label && (
					<label className={ classNames( 'CheckboxField-label' ) }>
						{ label }
					</label>
				) }
				{ children }
			</div>
		</div>
	)

}

export default CheckboxField
