function isAttributeNumberValue( value ) {
	return (
		typeof Number( value ) === 'number' &&
		!Number.isNaN( Number( value ) )
	)
}

export default isAttributeNumberValue
