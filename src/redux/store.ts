import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import userSlice from './user/userSlice'
import cartSlice from './slices/cartSlice'
import likeSlice from './slices/likeSlice'
import { watchesApi } from './items/fullItems'

export const store = configureStore({
	reducer: {
		filter: filterSlice,
		cart: cartSlice,
		like: likeSlice,
		user: userSlice,
		[watchesApi.reducerPath]: watchesApi.reducer,
	},
	middleware: getDefoultMiddleware =>
		getDefoultMiddleware().concat(watchesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
