function convertDomNodesToTokenizedString( string = '', context = {} ) {
	if ( typeof string !== 'string' ) {
		return string
	}

	let _string = string.replaceAll( /<span data-type=\"token\">\s?(.*?)<\/span>/g, ( match, p1 ) => {
		return `{{ ${ p1.trim() } }}`
	} )

	_string = _string.replaceAll( /<span data-type=\"cursor-start\">(.*?)<\/span>/g, ( match, p1 ) => {
		return p1
	} )

	_string = _string.replaceAll( /<span data-type=\"cursor-end\"> <\/span>/g, ( match ) => {
		return ''
	} )

	_string = _string.replaceAll( /<span data-type=\"cursor-end\">\s(.*?)<\/span>/g, ( match, p1 ) => {
		return p1
	} )

	return _string
}

export default convertDomNodesToTokenizedString
