import Sidebar from '../components/Sidebar/Sidebar';
import RevenueDisplay from '../components/RevenueDisplay/RevenueDisplay';

export default function Orders() {
	return (
		<div className="dashboard-container">
			<Sidebar/>
			<div className="orders">
				{
					<RevenueDisplay/>
				}
				Others
			</div>
		</div>
	)
}