import { useState, useEffect, useContext } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';
// Material UI 
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core';

export default function Register() {

	const { user } = useContext(UserContext);
	const history = useNavigate();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [mobileNo, setMobileNo] = useState('');
	const [email, setEmail ] = useState('');
	const [password, setPassword] = useState('');
	const [isActive, setActive] = useState(false);
	const btnStyle = {margin: '9px 0'};

	function registerUser(e) {
		e.preventDefault();

		fetch('https://serene-sea-03250.herokuapp.com/users/checkEmail', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email
			})
		})
		.then(res => res.json())
		.then(data => {
			// Check to see if email already exists. If it does, an alert will be prompted.
			if(data === true) {

				Swal.fire({
					title: "Email already exists",
					icon: "error",
					text: "Please provide another email"
				})
			}
			else {
				fetch('https://serene-sea-03250.herokuapp.com/users/register', {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						firstName: firstName,
						lastName: lastName,
						mobileNo: mobileNo,
						email: email,
						password: password
					})
				})
				.then(res => res.json())
				.then(data => {
					console.log(data);
					if(data === true) {

						Swal.fire({
							title: "Registration successful",
							icon: "success",
							text: "Login to proceed"
						})

						setFirstName('');
						setLastName('');
						setMobileNo('');
						setEmail('');
						setPassword('');

						history('/login')
					}
					else {

						Swal.fire({
							title: "Something went wrong",
							icon: "error",
							text: "Please try again"
						})

					}
				})
			}
		})
	}

	useEffect(() => {
		if((firstName !== '' && lastName !== '' && mobileNo !== '' && email !== '' && password !== '')) {
			setActive(true);
		}
		else {
			setActive(false);
		}
	}, [email, firstName, lastName, password, mobileNo])

	return (
		// Automatically naviagates to home page when user, who has already logged in, enters the registration url
		(user.id !== null) 
		?
		<Navigate to='/'/>
		:
		<Grid>
			<Paper elevation={4} className="paperStyle">
				<Grid align='center'>
					<h2 className="mt-3 mb-4">Register</h2>
				</Grid>
				<TextField
					label='First name' 
					variant='outlined'
					type='text'
					margin='dense'
					value={firstName}
					onChange={e => setFirstName(e.target.value)}
					fullWidth 
					required>
				</TextField>		
				<TextField
					label='Last name' 
					variant="outlined" 
					type='text'
					margin='dense'
					value={lastName}
					onChange={e => setLastName(e.target.value)}
					fullWidth 
					required>
				</TextField>		
				<TextField 
				inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
				label='Mobile number'
				variant='outlined'
				type='text'
				margin='dense'
				value={mobileNo}
				onChange={e => setMobileNo(e.target.value)}
				fullWidth
				required
				/>
				<TextField
					label='Email' 
					variant="outlined" 
					type='email'
					margin='dense'
					value={email}
					onChange={e => setEmail(e.target.value)}
					fullWidth 
					required>
				</TextField>				
				<TextField 
					label='Password' 
					variant='outlined'
					type='password'
					margin='dense' 
					value={password}
					onChange={e => setPassword(e.target.value)}
					fullWidth 
					required>
				</TextField>
				{	isActive 
					?
					<Button type='submit' color='default' variant='contained' onClick={(e) => registerUser(e)} style={btnStyle} fullWidth>Register</Button>
					:
					<Button type='submit' color='default' variant='contained' style={btnStyle} fullWidth disabled>CREATE ACCOUNT</Button>
				}
				<Typography> Already have an account? {' '}
					<Link className="text-link" to={'/login'}>Login</Link>
				</Typography>
			</Paper>
		</Grid>
	)
}
