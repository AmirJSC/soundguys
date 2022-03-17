import Sidebar from '../components/Sidebar/Sidebar';
import RevenueDisplay from '../components/RevenueDisplay/RevenueDisplay';

export default function Dashboard() {
	return (
		<div className="dashboard-container">
			<Sidebar/>
			<div className="account-dashboard">
				Others
			</div>
		</div>
	)
}
