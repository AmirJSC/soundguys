import './ProductDisplay.css';
import UserContext from '../../UserContext';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

export default function ProductDisplay({description, name, price, productId, onClick, url}) {

	const { user } = useContext(UserContext);
	const [quantity, setQuantity] = useState(1);

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	}

	const decreaseQuantity = () => {
		if(quantity > 1) {
			setQuantity(quantity - 1);
		}
	}

	return (
		<div className="display-container">
			<div className="photo-container">
				<img src={url} alt="Image1" className="product-img"/>
			</div>
			<div className="info-container">
				<h2>{name}</h2>
				<h5>${price}</h5>
				<p>{description}</p>
				<span className="d-flex my-2">
					<button type="button" className="quantity-btn" onClick={increaseQuantity}>+</button>
					<p className="quantity-text">{quantity}</p>
					<button className="quantity-btn" onClick={decreaseQuantity}>-</button>
				</span>
				{	user.id !== null 
					?
					<button className="cart-btn" onClick={() => onClick(productId, quantity, url)}>ADD TO CART</button>
					:
					<Link to="/login"><button className="cart-btn">ADD TO CART</button></Link>
				}
			</div>
		</div>
	)
}

