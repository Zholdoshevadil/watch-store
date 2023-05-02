import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setOpenModal, setItemId } from '../../redux/slices/filterSlice'
import { GrClose } from 'react-icons/gr'
import styles from './Modal.module.scss'

interface Item {
	id: number
	brand: string
	style: string
	title: string
	price: number
	imageUrl: string
	color: string
	weight: number
	category: string
	description: string
}

type ModalProps = {
	item: Item
}

const Modal: React.FC<ModalProps> = ({ item }) => {
	const dispatch = useDispatch()

	const closeModal = () => {
		dispatch(setOpenModal(false))
		dispatch(setItemId(''))
	}

	return (
		<div onClick={() => dispatch(setOpenModal(false))} className={styles.modal}>
			<div onClick={e => e.stopPropagation()} className={styles.body}>
				<button onClick={closeModal} className={styles.close}>
					<GrClose />
				</button>
				<div className={styles.content}>
					<div className={styles.image}>
						<img src={item.imageUrl} alt={item.title} />
					</div>
					<div className={styles.info}>
						<h2 className={styles.title}>
							<span className={styles.pretext}>model:</span>
							{item.title}
						</h2>
						<h3 className={styles.category}>
							<span className={styles.pretext}>category:</span>
							{item.category}
						</h3>
						<h3 className={styles.brand}>
							<span className={styles.pretext}>brand:</span>
							{item.brand}
						</h3>
						<h3 className={styles.color}>
							<span className={styles.pretext}>color:</span>
							{item.color}
						</h3>
						<span className={styles.weight}>
							<span className={styles.pretext}>weight:</span>
							{item.weight}g
						</span>
						<h3 className={styles.style}>
							<span className={styles.pretext}>style:</span>
							{item.style}
						</h3>
						<p>{item.description}</p>
						<span className={styles.price}>
							<span className={styles.pretext}>price:</span>${item.price}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
