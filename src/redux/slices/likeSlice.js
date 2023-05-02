import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	totalPrice: 0,
	items: [],
}

export const likeSlice = createSlice({
	name: 'like',
	initialState,
	reducers: {
		addItemLike(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id)

			state.items.push({
				...action.payload,
				count: 1,
			})
		},

		removeItem(state, action) {
			state.items = state.items.filter(obj => obj.id !== action.payload)
		},

		clearItem(state, action) {
			state.items = []
		},
	},
})

export const { addItemLike, removeItem, clearItem } = likeSlice.actions

export default likeSlice.reducer
