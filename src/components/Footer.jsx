import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
	return (
		<footer>
			<div className='footer__content'>
				<div className='footer-left'>
					<h3>STACK</h3>
					<ul className='stack-list'>
						<li>React</li>
						<li>Redux</li>
						<li>TypeScript</li>
						<li>RTK query</li>
						<li>Firebase</li>
						<li>SCSS</li>
					</ul>
				</div>
				<div className='footer-center'>
					<h3>WATCH STORE</h3>
					<p>Get your dream!</p>
					<h4>Follow us</h4>
					<ul className='socials'>
						<li>
							<a href='https://github.com/Zholdoshevadil' className='github'>
								<AiFillGithub />
							</a>
						</li>
						<li>
							<a
								href='https://www.linkedin.com/in/adil-zholdoshev-78b028231'
								className='linkedin'
							>
								<AiFillLinkedin />
							</a>
						</li>
					</ul>
				</div>
				<div className='footer-right'>
					<h3>CONTACT US</h3>
					<span>+996 709-46-98-09</span>
					<div>Zholdoshevadil@gmail.com</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
