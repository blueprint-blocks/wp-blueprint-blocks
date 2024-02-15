import { useLayoutEffect, useRef, useState } from 'react'
import { useOnClickOutside } from '../../hooks'

import FieldLabel from '../FieldLabel'

import './style.css'

function SelectField( {
	name,
	label,
	onBlur,
	onFocus,
	options,
	tooltip,
	value,
	setValue,
} ) {

	const ref = useRef()
	const valueRef = useRef()

	// State for our select dropdown
	const [ isSelectOpen, setSelectOpen ] = useState( false )

	const onClick = () => {
		setSelectOpen( true )
		onFocus()
	}

	const onSelectOption = ( event ) => {
		event.stopPropagation()
		setValue( event.target.dataset?.value )
		setSelectOpen( false )
		onBlur()
	}

	useLayoutEffect( () => {
		valueRef.current.innerText = value
	}, [ value ] )

	useLayoutEffect( () => {
		ref.current.classList.toggle( 'is-open', isSelectOpen )
	}, [ isSelectOpen ] )

	// Call hook passing in the ref and a function to call on outside click
	useOnClickOutside( ref, () => {
		if ( isSelectOpen === true ) {
			setSelectOpen( false )
			onBlur()
		}
	} )

	return (
		<div
			ref={ ref }
			className="SelectField"
			onClick={ onClick }
		>
			{ label && <FieldLabel htmlFor={ name } label={ label } tooltip={ tooltip } /> }
			<div className="SelectField-value" ref={ valueRef }/>
			<div className="SelectField-options">
				{ options.map( ( { label, value }, index ) => (
					<div key={ index } data-value={ value } onClick={ onSelectOption }>
						{ label }
					</div>
				) ) }
			</div>
		</div>
	)

}

export default SelectField
