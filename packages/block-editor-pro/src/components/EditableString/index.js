import { addFilter } from '@wordpress/hooks'

import {
	convertDomNodesToTokenizedString,
	convertTokenizedStringToDomNodes,
} from '../../functions'

import './style.css'

addFilter( 'blueprint-blocks.editable-string.value.before-render', 'blueprint-blocks-pro', ( value ) => {

	return convertTokenizedStringToDomNodes( value )

} )

addFilter( 'blueprint-blocks.editable-string.value.before-on-change', 'blueprint-blocks-pro', ( value ) => {

	return convertDomNodesToTokenizedString( value )

} )
