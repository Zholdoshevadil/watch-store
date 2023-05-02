import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	search: '',
	category: '',
	openModal: false,
	itemId: '',
	sort: {
		name: 'BEST SELLER',
		sortBy: '-rating',
	},
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setSearch(state, action) {
			state.search = action.payload
		},
		setCategory(state, action) {
			state.category = action.payload
		},
		setOpenModal(state, action) {
			state.openModal = action.payload
		},
		setItemId(state, action) {
			state.itemId = action.payload
		},
		setSort(state, action) {
			state.sort = action.payload
		},
	},
})

export const { setSearch, setCategory, setOpenModal, setItemId, setSort } =
	filterSlice.actions

export default filterSlice.reducer
