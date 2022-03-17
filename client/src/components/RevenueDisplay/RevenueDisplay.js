import './RevenueDisplay.css'


export default function RevenueDisplay() {


	return (
		<div className="featured">
			<div className="featured-items">
				<span className="featured-title">Total Revenue</span>
				<div className="featured-money-container">
					<span className="featured-money">$2, 145</span>
					<span className="featured-sub">Current month</span>
				</div>
			</div>
			<div className="featured-items">
				<span className="featured-title">New Users</span>
				<div className="featured-user-container">
					<span className="featured-user">12</span>
					<span className="featured-sub">Current month</span>
				</div>
			</div>
			<div className="featured-items">
				<span className="featured-title">Total Orders</span>
				<div className="featured-user-container">
					<span className="featured-user">25</span>
					<span className="featured-sub">Current month</span>
				</div>
			</div>
		</div>
	)
}

