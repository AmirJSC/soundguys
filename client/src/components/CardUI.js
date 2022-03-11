import { Card } from 'react-bootstrap';
import './Card.css';
import Button from './Button';

export default function CardUI({cardProp}) {
	
	const {url, description, name, price, quantity, _id} = cardProp;

	return (
		<div className="card mx-3">
			<div className="overflow">
				<img src={url} alt="Image1" className="card-img-top"/>
			</div>
			<div className="card-body text-dark">
				<h5 className="card-title">{name}</h5>
				<p className="card-subtitle">${price}</p>
				<div className="d-flex justify-content-start">
					 <Button
	                        className='btns'
	                        buttonStyle='btn--add--card'
	                        buttonSize='btn--small'
	                        id={_id}
	                    >
	                        ADD TO CART
	                    </Button>				 
	                    <Button
	                        className='btns'
	                        buttonStyle='btn--info'
	                        buttonSize='btn--info--size'
	                        id={_id}
	                    >
	                        LEARN MORE
	                    </Button>
                   </div>
			</div>
		</div>
		)
}