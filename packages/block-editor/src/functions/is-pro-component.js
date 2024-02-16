import { blockComponents } from '../data'

function isProComponent( type = 'html' ) {

	for ( let component of blockComponents.fields ) {
		if ( component?.type === type ) {
			return ( component?.pro || false )
		}
	}

	return false

}

export default isProComponent
