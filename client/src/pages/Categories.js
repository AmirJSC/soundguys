import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardUI from '../components/Card/CardUI';

export default function Categories() {

	const { category } = useParams();
	const [products, setProducts] = useState("");
	const title = category.toUpperCase();

	useEffect(() => {

		fetch(`https://serene-sea-03250.herokuapp.com/products/category/${category}`)
		.then(res => res.json())
		.then(data => {
		setProducts(data.map(product => {
			return (
				<CardUI key = {product._id} cardProp = {product}/>
			)
		}))
		})
	}, [category]);

	return (
		<Fragment>
		<div className="gray--background">
			<h1 className="text-center">{title}</h1>
			<div className="d-flex flex-wrap justify-content-center gap pb-4">
				{products}
			</div>
		</div>
		</Fragment>
		)
}