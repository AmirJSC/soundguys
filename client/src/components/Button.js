import './Button.css';
import { Link } from 'react-router-dom';

export default function Button({children, type, onClick, buttonStyle, buttonSize}) {
	
		const STYLES = ['btn--primary', 'btn--secondary', 'btn--outline', 'btn--info', 'btn--add--card'];
		const SIZES = ['btn--medium', 'btn--large', 'btn--small', 'btn--info--size'];
		const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
		const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

		return (
			<Link to='/login' className='btn-mobile'>
			{	buttonStyle == 'btn--info' ?
				<button className={`${checkButtonStyle} ${checkButtonSize}`}
				onClick={onClick}
				type={type}>
					{children}
				</button>
				:
				<button className={`bttn ${checkButtonStyle} ${checkButtonSize}`}
				onClick={onClick}
				type={type}>
					{children}
				</button>
			}
			</Link>
		)
}