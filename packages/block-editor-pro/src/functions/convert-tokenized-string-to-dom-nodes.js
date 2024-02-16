function convertTokenizedStringToDomNodes( string = '' ) {
	if ( typeof string !== 'string' ) {
		return string
	}

	let _string = string

	if ( string.slice( 0, 2 ) === '{{' ) {
		_string = `<span data-type="cursor-start"> </span>${ _string }`
	}

	_string = _string.replaceAll( /\{\{(.*?)\}\}/g, ( match, p1 ) => {
		return `<span data-type="token"> ${ p1.trim() }</span><span data-type="cursor-end"> </span>`
	} )

	return _string
}

export default convertTokenizedStringToDomNodes
