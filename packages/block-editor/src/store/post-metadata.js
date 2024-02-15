import { createSlice } from '@reduxjs/toolkit'

const { postMetadata = {} } = blueprintBlocksEditorSettings

const slice = createSlice( {

	name: 'postMetadata',

	initialState: {
		...postMetadata,
		postId: postMetadata?.postId || null,
	},

	reducers: {
		setPostId( state, action ) {
			state.postId = action?.payload || null
		},
	},

} )

const { actions, reducer } = slice

export const { setPostId } = actions
export default reducer
