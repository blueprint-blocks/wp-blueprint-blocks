import { createSlice } from '@reduxjs/toolkit'

const { blockMetadata = {} } = blueprintBlocksEditorSettings

const slice = createSlice( {

	name: 'blockEditorCss',

	initialState: {
		raw: blockMetadata?.editorCss || '',
	},

	reducers: {
		setEditorCss( state, action ) {
			state.raw = action?.payload || null
		},
	},

} )

const { actions, reducer } = slice

export const { setEditorCss } = actions
export default reducer
