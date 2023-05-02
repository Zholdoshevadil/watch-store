import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSort } from '../../redux/slices/filterSlice'
import styles from './Sort.module.scss'

const SortList = [
	{
		name: 'BEST SELLER',
		sortBy: '-rating',
	},
	{
		name: 'PRICE-HIGH',
		sortBy: 'price',
	},
	{
		name: 'PRICE-LOW',
		sortBy: '-price',
	},
]

function Sort() {
	const [open, setOpen] = useState(false)
	const [selected, setSelected] = useState(0)

	const dispatch = useDispatch()

	const onClickListItem = (obj, i) => {
		dispatch(setSort(obj))
		setSelected(i)
		setOpen(false)
	}

	return (
		<div className={styles.sort}>
			<b>Sort by:</b>
			<span onClick={() => setOpen(!open)}>{SortList[selected].name}</span>
			{open && (
				<div className={styles.sort__popup}>
					<ul>
						{SortList.map((obj, i) => (
							<li
								key={i}
								onClick={() => onClickListItem(obj, i)}
								className={selected === i ? 'active' : ''}
							>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
export default Sort
