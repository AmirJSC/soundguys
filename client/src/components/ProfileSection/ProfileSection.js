import './ProfileSection.css'
import { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import Swal from 'sweetalert2';

export default function ProfileSection() {

		const [firstName, setFirstName] = useState('');
		const [lastName, setLastName] = useState('');
		const [email, setEmail] = useState('');
		const [mobileNo, setMobileNo] = useState('');
		const [streeAddress, setStreetAddress] = useState('');
		const [city, setCity] = useState('');
		const [isAdmin, setIsAdmin] = useState(false);
		const token = localStorage.getItem("token");

		useEffect(() => {
			fetch('https://serene-sea-03250.herokuapp.com/users/', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then(res => res.json())
			.then(data => {
				setFirstName(data.firstName);
				setLastName(data.lastName);
				setEmail(data.email);
				setMobileNo(data.mobileNo);
				setIsAdmin(data.isAdmin);
				setStreetAddress(data.address[0].streetAddress);
				setCity(data.address[0].city);
			})
		}, []);

		const updateUserDetails = () => {
			fetch('https://serene-sea-03250.herokuapp.com/users/', {
				method: "PUT",
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`
				},
				body: JSON.stringify({
					firstName: firstName,
					lastName: lastName,
					mobileNo: mobileNo,
					address: [{"streetAddress": streeAddress, "city": city}]
				})
			})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if(data === false) {

					Swal.fire({
						title: 'Something went wrong',
						icon: 'error',
						text: 'Please try again.'
					})
				}
				else {
					Swal.fire({
						title: 'Profile update',
						icon: 'success',
						text: 'Changes saved successfully'
				})

				}
			})
		}

	return (
		<div>
			<div className="profile-wrapper">
				<span className="header">Account Details</span>
				<hr/>
				<span className="email-display">{email}</span> {' '}
				<span className="user-auth-style">{isAdmin ? "Administrator" : "Member"}</span>
				<div className="row mt-3">
					<div className="col-md-6">
						<p>First name</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
				        />
				    </div>					
				    <div className="col-md-6">
						<p>Last name</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
							value={lastName}
							onChange={e => setLastName(e.target.value)}
				          	fullWidth
				        />
				    </div>
				</div>
				<div className="row mt-2">
					<div className="col-md-6">
						<p>Mobile Number</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={mobileNo}
							onChange={e => setMobileNo(e.target.value)}
				        />
				    </div>	
				    <div className="col-md-6">
						<p>Street Address</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
							value={streeAddress}
							onChange={e => setStreetAddress(e.target.value)}
				          	fullWidth
				        />
				    </div>				
				</div>
				<div className="row mt-2">
					<div className="col-md-6">
						<p>City</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={city}
							onChange={e => setCity(e.target.value)}
				        />
				    </div>				
				</div>
				<button className="btn btn-success mt-3 custom-size" onClick={() => updateUserDetails()}>Save Changes</button>
			</div>
		</div>

	)
}

