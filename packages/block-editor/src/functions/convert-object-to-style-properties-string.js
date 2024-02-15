import isObject from './is-object'

function convertObjectToStylePropertiesString( object ) {
	if ( !isObject( object ) ) {
		return ''
	}

	return Object.entries( object ).map( ( [ name, value ] ) => (
		`${ name }: ${ value };`
	) ).join( ' ' )
}

export default convertObjectToStylePropertiesString
