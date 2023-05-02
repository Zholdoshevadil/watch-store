import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Search.module.scss'
import { BiSearch } from 'react-icons/bi'
import { MdClear } from 'react-icons/md'
import { setSearch } from '../../redux/slices/filterSlice'

const Search = () => {
	const dispatch = useDispatch()
	const { search } = useSelector(state => state.filter)

	return (
		<div className={styles.root}>
			<BiSearch className={styles.searchIcon} />
			<input
				value={search}
				onChange={event => dispatch(setSearch(event.target.value))}
				className={styles.input}
				placeholder='Search here...'
			/>
			{search && (
				<MdClear
					onClick={() => dispatch(setSearch(''))}
					className={styles.clearIcon}
				/>
			)}
		</div>
	)
}

export default Search
