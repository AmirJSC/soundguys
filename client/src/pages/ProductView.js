import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';

export default function ProductView() {

	const { user } = useContext(UserContext);
	const history = useNavigate();
	const { productId } = useParams();
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [quantity, setQuantity] = useState('');

	useEffect(() => {

		fetch(`https://serene-sea-03250.herokuapp.com/products/${productId}`)
		.then(res => res.json())
		.then(data => {
			console.log(data);

			setName(data.name);
			setDescription(data.description);
			setPrice(data.price);
			setQuantity(data.quantity);
		})
	}, [productId]);

	return (
		<div>MEEHH</div>
		)
}