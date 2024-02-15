import { combineReducers, configureStore } from '@reduxjs/toolkit'

import attributeHandles from './attribute-handles'
import blockBlueprint from './block-blueprint'
import blockJson from './block-json'
import blockEditorCss from './block-editor-css'
import blockViewCss from './block-view-css'
import editor from './editor'
import postMetadata from './post-metadata'
import postType from './post-type'

const store = configureStore( {
	reducer: combineReducers( {
		attributeHandles,
		blockBlueprint,
		blockJson,
		blockEditorCss,
		blockViewCss,
		editor,
		postMetadata,
		postType,
	} ),
} )

window.blueprintBlocksStore = store

export default store
