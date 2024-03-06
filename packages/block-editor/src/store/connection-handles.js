import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "connectionHandles",

	initialState: {
		allHandles: {},
		handlesByName: {},
	},

	reducers: {
		setPosition(state, action) {
			const {
				id,
				name,
				componentId,
				context = "to",
				x,
				y,
			} = action.payload;

			state.allHandles = {
				...state.allHandles,
				[id]: {
					name,
					componentId: (context === "to" && componentId) || null,
					context: (context === "from" && "from") || "to",
					x: (x && !Number.isNaN(x) && x) || 0,
					y: (y && !Number.isNaN(y) && y) || 0,
				},
			};

			if (!name) {
				return;
			}

			if (context === "from") {
				state.handlesByName = {
					...state.handlesByName,
					[name]: {
						from: id,
						to: state.handlesByName?.[name]?.to || [],
					},
				};
			} else {
				state.handlesByName = {
					...state.handlesByName,
					[name]: {
						from: state.handlesByName?.[name]?.from || null,
						to: [
							...new Set([
								...(state.handlesByName?.[name]?.to || []),
								id,
							]),
						],
					},
				};
			}
		},
		removePosition(state, action) {
			const { id, name } = action.payload;

			state.allHandles = Object.fromEntries(
				Object.entries(state.allHandles).filter(
					([key, value]) => key !== id,
				),
			);

			if (!name) {
				return;
			}

			if (state.handlesByName?.[name]?.from === id) {
				state.handlesByName = {
					...state.handlesByName,
					[name]: {
						from: null,
						to: state.handlesByName?.[name]?.to || [],
					},
				};
			} else if (state.handlesByName?.[name]?.to.includes(id)) {
				state.handlesByName = {
					...state.handlesByName,
					[name]: {
						from: state.handlesByName?.[name]?.from || null,
						to: (state.handlesByName?.[name]?.to || []).filter(
							(to) => to !== id,
						),
					},
				};
			}
		},
	},
});

const { actions, reducer } = slice;

export const { removePosition, setPosition } = actions;
export default reducer;
