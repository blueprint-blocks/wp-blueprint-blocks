function isStringNullValue( value ) {
	return (
		value === null ||
		!value?.length
	)
}

export default isStringNullValue
