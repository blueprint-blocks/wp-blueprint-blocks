import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice( {

	name: 'editor',

	initialState: {

		currentFocus: null,

		priorFocus: null,

		height: 0,

		width: 0,

	},

	reducers: {

		setFocus( state, action ) {
			const {
				context = null,
				...props
			} = action.payload || {}

			if ( context === null ) {
				return
			}

			state.currentFocus = {
				context,
				...props,
			}
		},

		setSize( state, action ) {
			state.height = ( action.payload?.height || 0 )
			state.width = ( action.payload?.width || 0 )
		},

		unsetFocus( state, action ) {
			state.priorFocus = state.currentFocus
			state.currentFocus = null
		},

	},

} )


const { actions, reducer } = slice

export const { setFocus, setSize, unsetFocus } = actions
export default reducer
