import { blockComponents } from '../data'

function getComponentProperties( type = 'html', tagName = 'div' ) {

	for ( let component of blockComponents.fields ) {
		if ( component?.type === type ) {
			return component
		}
	}

	for ( let component of blockComponents.html ) {
		if ( component?.defaultAttributes?.tagName === tagName ) {
			return component
		}
	}

	return null

}

export default getComponentProperties
