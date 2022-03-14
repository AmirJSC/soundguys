import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay';
import Swal from 'sweetalert2';

export default function ProductView() {

	const history = useNavigate();
	const { productId } = useParams();
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [category, setCategory] = useState('');
	const [url, setUrl] = useState('');

	const addToCart = (productId, quantity) => {
		fetch('https://serene-sea-03250.herokuapp.com/carts/', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`
			},
			body: JSON.stringify({
				productId: productId,
				quantity: quantity
			})
		})
		.then(res => res.json())
		.then(data => {
			if(data === true) {
				Swal.fire({
					title: `${name} added to cart`,
					icon: "success",
					text: ""
				})

				history(`/products/category/${category}`);
			}
			else {
				Swal.fire({
					title: "Something went wrong",
					icon: "error",
					text: ""
				})
			}
		})
	}

	useEffect(() => {

		fetch(`https://serene-sea-03250.herokuapp.com/products/${productId}`)
		.then(res => res.json())
		.then(data => {

			setName(data.name);
			setDescription(data.description);
			setPrice(data.price);
			setUrl(data.url);
			setCategory(data.category);
		})
	}, [productId]);

	return (
		<div>
			<ProductDisplay 
			description={description}
			price={price}
			productId={productId}
			name={name}
			category={category}
			url={url}
			onClick={addToCart}
			/>
		</div>
		)
}