import { useEffect, useState, useContext, Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import UserContext from '../UserContext';
import DeleteIcon from '@material-ui/icons/DeleteOutlineSharp';

export default function Cart() {

	const { user } = useContext(UserContext);
	const [products, setProducts] = useState([]);
	const [bill, setBill] = useState(0);
	const [cartId, setCartId] = useState('');
	const checkoutBtnStyle = {padding: '8px 20px', borderRadius: '2px', 
							border: '1px solid', backgroundColor: '#fff' 
							};
	const imgStyle = {width: 'auto', height: '100px', margin: '0 30px 0 0'}

	const placeOrder = (cartId) => {
		fetch('https://serene-sea-03250.herokuapp.com/orders/', {
			method: "POST",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
			})
			.then(res => res.json())
			.then(data => {
				console.log(data)
				setProducts([]);
				setBill(0);
		})
	}


	useEffect(() => {
		fetch('https://serene-sea-03250.herokuapp.com/carts/', {
			method: "GET",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		})
		.then(res => res.json())
		.then(data => {
			if(data.length > 0) {
				setProducts(data[0].products);
				setBill(data[0].bill);
				setCartId(data[0]._id)
			}
		})
	}, [])

	return (
		(user.id === null)
		?
		<Navigate to="/login"/>
		:
		<div className="my-5">
			{products.map((product) => 
				<div className="col-md-6 mx-auto" key={product._id}>
					<div className="d-flex justify-content-between px-3">
						<div className="d-flex">
							<img src={product.url} alt="product photo" style={imgStyle}/>
							<div>
								<div>{product.name}</div>
								<p className="gray">PRICE</p>
								<Badge>QUANTITY</Badge>
							</div>
						</div>
						<div>
							<div>PRICE</div>
							<p>${product.price}</p>
							<Badge bg="light" text="dark" pill>{product.quantity}</Badge>
						</div>
					</div>
					<hr/>
				</div>
				)
			}
			<div className="col-md-6 mx-auto mt-3 px-3">
				<div className="d-flex">
					<strong className="me-auto px-3">Total: </strong>
					<h3 className="px-3">${bill}</h3>
				</div>
			</div>
			<div className="col-md-6 mx-auto px-3">
				<button type="button" style={checkoutBtnStyle} onClick={() => placeOrder(cartId)}>Checkout</button>
			</div>
		</div>
	)
}
