import { Link } from 'react-router-dom';
import Button from './Button';
import './Footer.css'

export default function Footer() {
	return  (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">
				Sign up for news, updates & announcements.
				</p>
				<p className="footer-subscription-text">
				You can unsubscribe anytime
				</p>
				<div className="input-areas">
					<form>
						<input type="email" name="email" placeholder="Your Email"className="footer-input"/>
						<Button buttonStyle='btn--outline'>Subscribe</Button>
					</form>
				</div>
			</section>
			<div className="footer-links">
				<div className="footer-link-items">
					<h2>CONTACT</h2>
					<Link to='/'>ABOUT US</Link>
					<Link to='/'>FAQ</Link>
					<Link to='/'>PERSONAL DATA REQUESTS</Link>
				</div>					
				<div className="footer-link-items">
					<h2>ABOUT</h2>
					<Link to='/'>ABOUT US</Link>
					<Link to='/'>REVIEWS</Link>
					<Link to='/'>NEWS</Link>
				</div>
				<div className="footer-link-items">
					<h2>SUPPORT</h2>
					<Link to='/'>PRODUCT SUPPORT</Link>
					<Link to='/'>PRODUCT COMPARISON</Link>
					<Link to='/'>PRODUCT REGISTRATION</Link>
				</div>										
			</div>
			<div className="social-media">
				<small className="website-rights social-media-items">SoundGuys © 2022</small>
				<div className="social-icon social-media-items">
					<Link className="social-icon-link facebook" to="/" target="_blank" arial-label="Facebook">
						<i className="fab fa-facebook-f"></i>
					</Link>						
					<Link className="social-icon-link instagram" to="/" target="_blank" arial-label="Instagram">
						<i className="fab fa-instagram"></i>
					</Link>						
					<Link className="social-icon-link twitter" to="/" target="_blank" arial-label="Twitter">
						<i className="fab fa-twitter"></i>
					</Link>
				</div>
			</div>
		</div>
	)
}