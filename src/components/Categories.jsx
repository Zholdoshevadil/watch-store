import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import Sort from './Sort/index'
import Search from './Search'
import { setCategory } from '../redux/slices/filterSlice'

const categories = ['Men', 'Women', 'Kids']

function Categories() {
	const [sortType, setSortType] = useState(0)

	const dispatch = useDispatch()
	const { category } = useSelector(state => state.filter)

	return (
		<div className='categories__main'>
			<div className='categories'>
				<ul>
					<li
						onClick={() => dispatch(setCategory(''))}
						className={category === '' && 'active'}
					>
						All
					</li>
					{categories.map((categoryName, i) => (
						<li
							key={i}
							onClick={() => dispatch(setCategory(categoryName))}
							className={categoryName === category ? 'active' : ''}
						>
							{categoryName}
						</li>
					))}
				</ul>
			</div>
			<Search />
			<Sort value={sortType} oneChangeSort={i => setSortType(i)} />
		</div>
	)
}
export default Categories
