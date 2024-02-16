import classNames from 'classnames'
import { useCallback, useRef, useState } from 'react'

import EditableString from '../EditableString'
import FieldLabel from '../FieldLabel'

import { useOnClickOutside } from '../../hooks'

import './style.css'

function ListField( {
	disabled,
	label,
	min = 0,
	max = 0,
	placeholder,
	onBlur,
	onFocus,
	tooltip,
	value = [],
	setValue,
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
		<div ref={ ref } className={ classNames( 'ListField', { 'is-disabled': disabled } ) } onClick={ () => setFocus( Math.min( value?.length || 0, max ) ) }>
			{ label && <FieldLabel htmlFor={ name } label={ label } tooltip={ tooltip } /> }
			<div className="ListField-list">
				{ itemList.slice( 0, max ).map( ( itemValue, index ) => (
					<div
						onClick={ ( event ) => event.stopPropagation() }
						onFocus={ () => setFocus( index ) }
						onBlur={ () => setBlur( index ) }
					>
						{ disabled && ( index < itemList.length - 1 ) && (
							<div class="ListField-value">
								{ itemValue }
							</div>
						) }
						{ disabled && ( index === itemList.length - 1 ) && (
							<div class="ListField-placeholder">
								{ placeholder }
							</div>
						) }
						{ !disabled && (
							<EditableString
								key={ index }
								placeholder={ placeholder }
								value={ itemValue }
								onChange={ ( indexValue ) => onChange( indexValue, index ) }
							/>
						) }
					</div>
				) ) }
			</div>
		</div>
	)
}

export default ListField
