import { createSlice } from '@reduxjs/toolkit'

const { blockMetadata = {} } = blueprintBlocksEditorSettings

const slice = createSlice( {

	name: 'blockViewCss',

	initialState: {
		raw: blockMetadata?.viewCss || '',
	},

	reducers: {
		setViewCss( state, action ) {
			state.raw = action?.payload || null
		},
	},

} )

const { actions, reducer } = slice

export const { setViewCss } = actions
export default reducer
