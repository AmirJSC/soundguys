import { useState, useEffect } from 'react';
import './OrderBar.css';

export default function OrderBar({user}) {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		if(user.isAdmin) {
			fetch('https://serene-sea-03250.herokuapp.com/orders/all', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
			})
			.then(res => res.json())
			.then(data => {
				setProducts(data);
			})
		}
		else {
			fetch('https://serene-sea-03250.herokuapp.com/orders/orderHistory', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
			})
			.then(res => res.json())
			.then(data => {
				setProducts(data);
			})

		}
	}, [])

	return (
		<div>
			{products.map((product) =>
				<div className="order-wrapper" key={product._id}>
					<span>Status: <p className="status">Processing</p></span>
					<span>Order ID: {product._id}</span>
					<span>Total Bill: ${product.bill}</span>
					<span>Purchased on: {product.purchasedOn.substring(0, 10)}</span>
				</div>
				)
			}
		</div>
	)
}