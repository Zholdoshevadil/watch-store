import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

// type PaginationProps = {
//   currentPage: number;
//   onChangePage: (page: number) => void;
// };

const Pagination = ({ onChangePage }) => {
	return (
		<ReactPaginate
			className={styles.root}
			breakLabel='...'
			nextLabel='>'
			previousLabel='<'
			onPageChange={event => onChangePage(event.selected + 1)}
			pageRangeDisplayed={8}
			pageCount={2}
			// forcePage={currentPage - 1}
			renderOnZeroPageCount={null}
		/>
	)
}

export default Pagination
