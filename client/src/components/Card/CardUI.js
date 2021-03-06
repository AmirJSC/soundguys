import './Card.css';
import Button from '../Button/Button';

export default function CardUI({cardProp}) {
	
	const {url, name, price, _id} = cardProp;

	return (
		<div className="card mx-3">
			<div className="overflow">
				<img src={url} alt="Image1" className="card-img-top"/>
			</div>
			<div className="card-body text-dark">
				<h5 className="card-title">{name}</h5>
				<p className="card-subtitle">${price}</p>		 
				    <Button
	                    buttonStyle='btn--info'
	                    buttonSize='btn--info--size'
	                    id={_id}
	                >
	                LEARN MORE
	                </Button>
			</div>
		</div>
	)
}