import isStringifiedObject from './is-stringified-object'

function convertStylePropertiesStringToObject( string ) {
	if ( isStringifiedObject( string ) ) {
		return JSON.parse( string )
	}

	if ( typeof string !== 'string' ) {
		return {}
	}

	return Object.fromEntries(
		string.split( ';' )
			.map( ( a ) => a.trim() )
			.filter( ( b ) => b.length > 0 )
			.map( ( c ) => (
				c.split( ':' ).map( ( d ) => d.trim() )
			) )
	)
}

export default convertStylePropertiesStringToObject
