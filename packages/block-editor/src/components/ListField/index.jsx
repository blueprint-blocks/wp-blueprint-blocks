import { useCallback, useRef, useState } from 'react'

import EditableString from '../EditableString'
import FieldLabel from '../FieldLabel'

import { useOnClickOutside } from '../../hooks'

import './style.css'

function ListField( {
	name,
	label,
	placeholder,
	onBlur,
	onFocus,
	tooltip,
	value = [],
	setValue,
	min = 0,
	max = 0,
} ) {

	const ref = useRef( null )

	const [ hasFocus, setHasFocus ] = useState( false )
	const [ currentIndex, setCurrentIndex ] = useState( 0 )

	function setFocus( index ) {
		if ( hasFocus === false || index !== currentIndex ) {
			setHasFocus( true )
			setCurrentIndex( index )
			onFocus( index )
		}

		if ( index === value?.length || 0 ) {
			setValue( [ ...value, '' ] )
		} else if ( value?.[ ( value?.length || 0 ) - 1 ] === '' ) {
			setValue( value.slice( 0, -1 ) )
		}
	}

	const setBlur = ( index ) => {
		if ( hasFocus === true && index === currentIndex ) {
			setHasFocus( false )
			setCurrentIndex( 0 )
			onBlur( index )
		}

		if ( value?.[ ( value?.length || 0 ) - 1 ] === '' ) {
			setValue( value.slice( 0, -1 ) )
		}
	}

	const onChange = ( indexValue, index ) => {
		const newValue = [ ...value ]
		if ( index > newValue.length ) {
			newValue.push( indexValue )
		} else {
			newValue[ index ] = indexValue
		}
		setValue( [ ...newValue ].filter( ( n => n.length > 0 ) ) )
	}

	const itemList = value.slice( 0, max )

	if ( itemList[ itemList.length - 1 ] !== '' ) {
		itemList.push( '' )
	}

	useOnClickOutside( ref, () => {
		setBlur( currentIndex )
	} )

	return (
		<div ref={ ref } className="ListField" onClick={ () => setFocus( Math.min( value?.length || 0, max ) ) }>
			{ label && <FieldLabel htmlFor={ name } label={ label } tooltip={ tooltip } /> }
			<div className="ListField-input">
				{ itemList.slice( 0, max ).map( ( itemValue, index ) => (
					<div
						onClick={ ( event ) => event.stopPropagation() }
						onFocus={ () => setFocus( index ) }
						onBlur={ () => setBlur( index ) }
					>
						<EditableString
							key={ index }
							placeholder={ 'Enter a keyword...' }
							value={ itemValue }
							onChange={ ( indexValue ) => onChange( indexValue, index ) }
						/>
					</div>
				) ) }
			</div>
		</div>
	)
}

export default ListField
