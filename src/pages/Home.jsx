import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import WatchBlock from '../components/WatchBlock/index'
import Categories from '../components/Categories'
import SliderContent from '../components/SliderContent'
import Pagination from '../components/Pagination'
import Modal from '../components/Modal/Modal'
import Loading from '../components/Loading'
import { useGetItemsQuery } from '../redux/items/fullItems'

function Home() {
	// const [isLoading, setIsLoading] = useState(false)
	// const [items, setItems] = useState([])
	const [fullItem, setFullItem] = useState()
	const [categoryId, setCategoryId] = useState(0)
	const [currentPage, setCurrentPage] = useState(1)
	const { search, category, openModal, itemId, sort } = useSelector(
		state => state.filter
	)

	const searchValue = search ? `q=${search}` : ''
	const categoryValue = category ? `&category=${category}` : ''
	const sortById = sort.sortBy.replace('-', '')
	const order = sort.sortBy.includes('-') ? 'asc' : 'desc'

	const { data: items, isLoading } = useGetItemsQuery({
		searchValue,
		categoryValue,
		currentPage,
		sortById,
		order,
	})

	useEffect(() => {
		axios.get(`http://localhost:8000/items/${itemId}`).then(res => {
			setFullItem(res.data)
		})
	}, [itemId])
	return (
		<div className='content'>
			<>
				<SliderContent />
				<Categories
					value={categoryId}
					onClickCategories={i => setCategoryId(i)}
				/>
			</>
			<div className='content__items'>
				{isLoading ? (
					<Loading />
				) : (
					items.map(obj => <WatchBlock key={obj.id} {...obj} />)
				)}
			</div>
			{openModal && <Modal item={fullItem} />}
			<Pagination onChangePage={number => setCurrentPage(number)} />
		</div>
	)
}

export default Home
