import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const watchesApi = createApi({
	reducerPath: 'watchesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL,
	}),
	endpoints: build => ({
		getItems: build.query({
			query: ({
				searchValue,
				categoryValue,
				currentPage,
				sortById,
				order,
			}) => ({
				url: `/items?_page=${currentPage}&_limit=8&${searchValue}${categoryValue}&_sort=${sortById}&_order=${order}`,
			}),
		}),
	}),
})

export const { useGetItemsQuery } = watchesApi
