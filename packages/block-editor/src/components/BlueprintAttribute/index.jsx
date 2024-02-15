import { useLayoutEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { attributeTypes } from '../../data'
import { addAttribute, editAttribute, removeAttribute } from '../../store/block-json'

import {
	isArray,
	isAttributeArrayValue,
	isAttributeNullValue,
	isAttributeNumberValue,
	isAttributeObjectValue,
	isAttributeStringValue,
	isObject,
} from '../../functions'

import { useDebugRenderCount } from '../../hooks'

import BlueprintAttributeHandle from '../BlueprintAttributeHandle'
import BlueprintWarning from '../BlueprintWarning'
import EditableString from '../EditableString'

import './style.css'

function BlueprintAttribute( {
	editorRef = null,
	attributeName = null,
	attributeType = 'string',
	...props
} ) {

	let attributeDefault

	if ( isObject( props?.attributeDefault ) || isArray( props?.attributeDefault ) ) {
		attributeDefault = JSON.stringify( props?.attributeDefault )
	} else {
		attributeDefault = props?.attributeDefault
	}

	const ref = useRef( null )
	const attributeNameRef = useRef( null )
	const attributeTypeRef = useRef( null )
	const attributeDefaultRef = useRef( null )

	const dispatch = useDispatch()

	const [ attributeNameValue, setAttributeNameValue ] = useState( attributeName )
	const [ attributeTypeValue, setAttributeTypeValue ] = useState( attributeType )
	const [ attributeDefaultValue, setAttributeDefaultValue ] = useState( attributeDefault )

	const [ attributeNameValid, setAttributeNameValid ] = useState( true )
	const [ attributeTypeValid, setAttributeTypeValid ] = useState( true )
	const [ attributeDefaultValid, setAttributeDefaultValid ] = useState( true )

	const allowsNullDefault = attributeTypes?.[ attributeTypeValue ]?.allowsNull

	function onChangeAttributeName( value ) {
		dispatch( removeAttribute( attributeNameValue ) )

		dispatch( addAttribute( {
			name: value,
			type: attributeTypeValue,
			default: attributeDefaultValue,
		} ) )

		setAttributeNameValue( value )
	}

	function onChangeAttributeType( value ) {
		dispatch( editAttribute( {
			name: attributeNameValue,
			type: value,
			default: attributeDefaultValue,
		} ) )

		setAttributeTypeValue( value )
	}

	function onChangeAttributeDefault( value ) {
		dispatch( editAttribute( {
			name: attributeNameValue,
			type: attributeTypeValue,
			default: value,
		} ) )

		setAttributeDefaultValue( value )
	}

	useLayoutEffect( () => {
		if ( !attributeNameValue?.length ) {
			setAttributeNameValid( false )
		} else {
			setAttributeNameValid( true )
		}
	}, [ attributeNameValue ] )

	useLayoutEffect( () => {
		if ( !( attributeTypeValue in attributeTypes ) ) {
			setAttributeTypeValid( false )
		} else {
			setAttributeTypeValid( true )
		}
	}, [ attributeTypeValue ] )

	useLayoutEffect( () => {
		if ( attributeTypeValue === 'array' && !isAttributeArrayValue( attributeDefaultValue ) && !isAttributeNullValue( attributeDefaultValue ) ) {
			setAttributeDefaultValid( false )
		} else if ( attributeTypeValue === 'object' && !isAttributeObjectValue( attributeDefaultValue ) && !isAttributeNullValue( attributeDefaultValue ) ) {
			setAttributeDefaultValid( false )
		} else if ( attributeTypeValid && !allowsNullDefault && !attributeDefaultValue?.length ) {
			setAttributeDefaultValid( false )
		} else {
			setAttributeDefaultValid( true )
		}
	}, [ attributeDefaultValue, attributeTypeValue, attributeTypeValid ] )

	useLayoutEffect( () => {
		attributeNameRef.current.classList.toggle( 'is-invalid', !attributeNameValid )
	}, [ attributeNameValid ] )

	useLayoutEffect( () => {
		attributeTypeRef.current.classList.toggle( 'is-invalid', !attributeTypeValid )
	}, [ attributeTypeValid ] )

	useLayoutEffect( () => {
		attributeDefaultRef.current.classList.toggle( 'is-invalid', !attributeDefaultValid )
	}, [ attributeDefaultValid ] )

	if ( process.env.NODE_ENV === 'development' ) {
		useDebugRenderCount( 'BlueprintAttribute' )
	}

	return (
		<div
			ref={ ref }
			className="BlueprintAttribute"
		>
			<BlueprintAttributeHandle
				editorRef={ editorRef }
				attributeName={ attributeNameValue }
				context="from"
				position="right"
			/>
			<div className="BlueprintAttribute-line">
				<span ref={ attributeNameRef }>
					<BlueprintWarning
						position="left"
					/>
					<span>{ '"' }</span>
					<EditableString
						className="BlueprintAttribute-name"
						placeholder="attributeName"
						value={ attributeNameValue }
						onChange={ onChangeAttributeName }
					/>
					<span>{ '": {' }</span>
				</span>
			</div>
			<div className="BlueprintAttribute-line indent">
				<span ref={ attributeTypeRef }>
					<BlueprintWarning
						position="right"
					/>
					<span>{ '"' }</span>
					<span className="key">{ `type` }</span>
					<span>{ `": "` }</span>
					<EditableString
						className="BlueprintAttribute-type"
						placeholder="string"
						value={ attributeTypeValue }
						onChange={ onChangeAttributeType }
					/>
					<span>{ '"' }</span>
				</span>
			</div>
			<div className="BlueprintAttribute-line indent">
				<span ref={ attributeDefaultRef }>
					<BlueprintWarning
						position="right"
					/>
					<span>{ '"' }</span>
					<span className="key">{ `default` }</span>
					<span>{ `": ` }</span>
					{ ( ( attributeTypeValue === 'string' && !isAttributeNullValue( attributeDefaultValue ) ) || isAttributeStringValue( attributeDefaultValue ) ) && (
						<span>{ `"` }</span>
					) }
					<EditableString
						className="BlueprintAttribute-default"
						placeholder="null"
						value={ attributeDefaultValue }
						onChange={ onChangeAttributeDefault }
					/>
					{ ( ( attributeTypeValue === 'string' && !isAttributeNullValue( attributeDefaultValue ) ) || isAttributeStringValue( attributeDefaultValue ) ) && (
						<span>{ `"` }</span>
					) }
				</span>
			</div>
			<div>
				<span>{ '}' }</span>
			</div>
		</div>
	)

}

export default BlueprintAttribute
