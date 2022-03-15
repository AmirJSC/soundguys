import { useEffect, useState, useContext, Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { Container, Row, Col, ListGroup, Badge, Button } from 'react-bootstrap';
import UserContext from '../UserContext';


export default function Cart() {

	const { user } = useContext(UserContext);
	const [products, setProducts] = useState([]);
	const [bill, setBill] = useState(0);
	const checkoutBtnStyle = {padding: '8px 20px', borderRadius: '2px', 
							border: '1px solid', backgroundColor: '#fff' 
							};


	useEffect(() => {
		fetch('https://serene-sea-03250.herokuapp.com/carts/', {
			method: "GET",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)

		})
	})


	return (
		(user.id === null)
		?
		<Navigate to="/login"/>
		:
		<Fragment>
			<Row className="my-5 mx-1">
				<Col lg={{span: 6, offset: 3}}>
					<ListGroup as="ul">
						<ListGroup.Item as="li">
							<div className="d-flex">
								<div className="me-auto d-flex flex-column">
									<h5>Title</h5>
									<p>Price</p>
									<p>Quantity</p>
								</div>
								<div className="d-flex flex-column">
									<h5>Title</h5>
									<p>Price</p>
									<Badge bg="light" text="dark" pill>1</Badge>
								</div>
							</div>
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
			<Row>
				<Col xs={{span: 6, offset: 3}}>
					<strong>Total: </strong>
				</Col>
			</Row>
			<hr/>
			<Row>
				<Col xs={{span: 6, offset: 3}}>
					<button type="button" style={checkoutBtnStyle}>Checkout</button>
				</Col>
			</Row>
		</Fragment>
	)
}