import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdFavorite } from 'react-icons/md'
import { setItemId, setOpenModal } from '../../redux/slices/filterSlice'
import { addItem } from '../../redux/slices/cartSlice'
import { addItemLike } from '../../redux/slices/likeSlice'

const WatchBlock = ({ id, title, imageUrl, style, price }) => {
	const dispatch = useDispatch()
	const [count, setCount] = React.useState([])

	const openModal = () => {
		dispatch(setItemId(id))
		dispatch(setOpenModal(true))
	}

	const likeItems = useSelector(state => state.like.items)
	const likeId = likeItems.map(obj => obj.id)

	const cartItem = useSelector(state =>
		state.cart.items.find(obj => obj.id === id)
	)

	const addedCount = cartItem ? cartItem.count : 0

	const onClickAdd = () => {
		const item = {
			id,
			title,
			price,
			imageUrl,
			style,
		}

		dispatch(addItem(item))
	}
	const onClickLike = () => {
		const item = {
			id,
			title,
			price,
			imageUrl,
			style,
		}
		if (likeId.includes(id)) {
			return
		} else {
			dispatch(addItemLike(item))
		}
	}

	return (
		<div className='watch__body'>
			<MdFavorite
				style={likeId.includes(id) ? { color: 'red' } : ''}
				onClick={onClickLike}
				className='fav__icon'
			/>
			<div onClick={openModal} className='watch__block watch-block'>
				<div className='watch-block__image'>
					<img src={imageUrl} alt='img' />
				</div>
				<div className='watch-block__bottom'>
					<h4 className='watch-block__title'>{title}</h4>
					<p className='watch-block__style'>{style}</p>
					<span className='watch-block__price'>${price}</span>
				</div>
			</div>
			<button type='submit' onClick={onClickAdd} className='watch-block__btn'>
				BUY NOW {addedCount > 0 && addedCount}
			</button>
		</div>
	)
}

export default WatchBlock
