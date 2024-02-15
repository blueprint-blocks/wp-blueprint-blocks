import { blockComponents } from '../data'

function componentAllowsChildren( type = 'html', tagName = 'div' ) {

	if ( type !== 'html' ) {
		return false
	}

	for ( let component of blockComponents.html ) {
		if ( component?.defaultAttributes?.tagName === tagName ) {
			return component?.allowsChildren
		}
	}

	return false

}

export default componentAllowsChildren
