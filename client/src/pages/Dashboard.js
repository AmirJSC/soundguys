import { useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import UserContext from '../UserContext';
// Components
import ProfileSection from '../components/ProfileSection/ProfileSection';
import OrderBar from '../components/OrderBar/OrderBar';

export default function Dashboard() {

	const { user } = useContext(UserContext);

	useEffect(() => {

		fetch('https://serene-sea-03250.herokuapp.com/orders/orderHistory', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
		})
	}, []);

	return (
		(user.id === null)
		?
		<Navigate to='/login'/>
		:
		<div className="dashboard-container">
			<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
	  			<Tab eventKey="profile" title="Account">
	  				<ProfileSection/>
	  			</Tab>
			  	<Tab eventKey="orders" title={user.isAdmin ? "Orders" : "Order history"}>
			  		<OrderBar user={user}/>
			  	</Tab>
			</Tabs>
		</div>
	)
}
