import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice( {

	name: 'upsellPrompt',

	initialState: {
		visible: false,
	},

	reducers: {
		hideUpsellPrompt( state, action ) {
			state.visible = false
		},
		showUpsellPrompt( state, action ) {
			state.visible = true
		},
	},

} )

const { actions, reducer } = slice

export const { hideUpsellPrompt, showUpsellPrompt } = actions
export default reducer
