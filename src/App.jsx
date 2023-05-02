import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Cart from './pages/Cart'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Footer from './components/Footer'
import './scss/App.scss'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='content__container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/Cart' element={<Cart />} />
						<Route path='/Favorites' element={<Favorites />} />
						<Route path='/LoginPage' element={<LoginPage />} />
						<Route path='/SignUpPage' element={<SignUpPage />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default App
