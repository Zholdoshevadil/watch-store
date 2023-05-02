import pngLogo from '../assets/wrist-watch.png'
import { TiShoppingCart } from 'react-icons/ti'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div className='header'>
			<div className='header__container'>
				<div className='header__content'>
					<Link to='/'>
						<div className='header__logo'>
							<img width='58' src={pngLogo} alt='Watch logo' />
							<div>
								<h1>Watch store</h1>
								<p>Get your dream!</p>
							</div>
						</div>
					</Link>

					<div className='buttons'>
						<Link to='/LoginPage' className='login__btn'>
							Login
						</Link>
						<Link to='/favorites' className='fav__btn'>
							<MdOutlineFavoriteBorder className='fav__icn' />
						</Link>
						<Link to='/cart' className='shopping__btn'>
							<TiShoppingCart className='shopping__icn' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
