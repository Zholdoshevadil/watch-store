import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { MdFavorite } from 'react-icons/md'
import FavItem from '../components/FavItem'
import { clearItem } from '../redux/slices/likeSlice'

const Favorites = () => {
	const dispatch = useDispatch()
	const { items } = useSelector(state => state.like)

	const onClickClear = () => {
		if (window.confirm('Clear the favorites?')) {
			dispatch(clearItem())
		}
	}

	return (
		<div className='content'>
			<div className='container container--cart'>
				<div className='cart'>
					<div className='cart__top'>
						<h2 className='content__title'>
							<MdFavorite className='fav-icn' />
							Favorites
						</h2>
						<div onClick={onClickClear} className='cart__clear'>
							<svg
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M2.5 5H4.16667H17.5'
									stroke='#B6B6B6'
									strokeWidth='1.2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z'
									stroke='#B6B6B6'
									strokeWidth='1.2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M8.33337 9.16667V14.1667'
									stroke='#B6B6B6'
									strokeWidth='1.2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M11.6666 9.16667V14.1667'
									stroke='#B6B6B6'
									strokeWidth='1.2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>

							<span>Clear Favorites</span>
						</div>
					</div>
					<div className='content__items'>
						{items.map(item => (
							<FavItem key={item.id} {...item} />
						))}
					</div>
					<div className='cart__bottom'>
						<div className='cart__bottom-buttons'>
							<Link to='/'>
								<div className='button button--outline button--add go-back-btn'>
									<svg
										width='8'
										height='14'
										viewBox='0 0 8 14'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M7 13L1 6.93015L6.86175 1'
											stroke='#D3D3D3'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>

									<span>Go back</span>
								</div>
							</Link>
							<button type='submit' className='button pay-btn'>
								Buy now
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Favorites
