function isAttributeObjectValue( value ) {
	try {
		const json = JSON.parse( value )

		if ( typeof json === 'object' && !Array.isArray( json ) ) {
			return true
		}
	} catch ( e ) {
		return false
	}

	return false
}

export default isAttributeObjectValue
