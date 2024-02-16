import { createSlice } from '@reduxjs/toolkit'

import {
	getBlockClassName,
	getBlockName,
	getBlockNamespace,
} from './selectors'

function getUniqueAttributeName( name = 'attribute', allNames ) {
	let index = 1
	let indexedName = `${ name }${ index }`

	while ( allNames.includes( indexedName ) ) {
		index++
		indexedName = `${ name }${ index }`
	}

	return indexedName
}

const ALLOWED_ATTRIBUTE_TYPES = [
	'array',
	'number',
	'string',
	'object',
]

const {
	blockJson = {},
} = ( blueprintBlocksEditorSettings?.blockMetadata || {} )

const slice = createSlice( {

	name: 'blockJson',

	initialState: {
		...blockJson,
		keywords: [
			...( blockJson?.keywords || [] ),
		],
		attributes: {
			...( blockJson?.attributes || {} ),
		},
	},

	reducers: {
		addAttribute( state, action ) {
			let {
				name = '',
				type = 'string',
				defaultValue = null,
			} = action.payload

			if ( name === '' ) {
				name = getUniqueAttributeName( 'attribute', Object.keys( state.attributes ) )
			}

			state.attributes = {
				...state.attributes,
				[ name ]: {
					type: ALLOWED_ATTRIBUTE_TYPES.includes( type ) && type || 'string',
					default: defaultValue || null,
				}
			}
		},
		editAttribute( state, action ) {
			const {
				name = '',
				type = 'string',
				defaultValue = null,
			} = action.payload

			state.attributes = {
				...state.attributes,
				[ name ]: {
					type: ALLOWED_ATTRIBUTE_TYPES.includes( type ) && type || 'string',
					default: defaultValue || null,
				}
			}
		},
		removeAttribute( state, action ) {
			const name = action.payload

			state.attributes = Object.fromEntries( Object.entries( state.attributes ).filter( ( [ key, value ] ) => (
				key !== name
			) ) )
		},
		setAllowedBlocks( state, action ) {
			state.allowedBlocks = ( Array.isArray( action.payload ) && action.payload || [ action.payload ] )
		},
		setAncestor( state, action ) {
			state.ancestor = ( Array.isArray( action.payload ) && action.payload || [ action.payload ] )
		},
		setCategory( state, action ) {
			state.category = action.payload
		},
		setDescription( state, action ) {
			state.description = action.payload
		},
		setIcon( state, action ) {
			state.icon = action.payload
		},
		setKeywords( state, action ) {
			state.keywords = ( Array.isArray( action.payload ) && action.payload || [ action.payload ] ).slice( 0, 3 )
		},
		setName( state, action ) {
			state.name = action.payload
		},
		setParent( state, action ) {
			state.parent = ( Array.isArray( action.payload ) && action.payload || [ action.payload ] )
		},
		setTextdomain( state, action ) {
			state.textdomain = action.payload
		},
		setTitle( state, action ) {
			state.title = action.payload
		},
	},

} )

const { actions, reducer } = slice

export const {
	addAttribute,
	editAttribute,
	removeAttribute,
	setAllowedBlocks,
	setAncestor,
	setCategory,
	setDescription,
	setIcon,
	setKeywords,
	setName,
	setParent,
	setTextdomain,
	setTitle,
} = actions

export {
	getBlockClassName,
	getBlockName,
	getBlockNamespace,
}

export default reducer
