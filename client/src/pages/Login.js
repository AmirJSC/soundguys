import { Fragment, useState, useEffect, useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';
// Material UI 
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function Login() {

	const { user, setUser } = useContext(UserContext);
	const [email, setEmail ] = useState('');
	const [password, setPassword] = useState('');
	const [isActive, setActive] = useState(false);
	const avatarStyle = {backgroundColor: '#ffe135'};
	const btnStyle = {margin: '9px 0'};

	function authenticate(e) {
		e.preventDefault();

		fetch('https://serene-sea-03250.herokuapp.com/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(res => res.json())
		.then(data => {
			if(typeof data.access !== 'undefined') {
				// When the user credentails posted are correct, the server returns the token.
				localStorage.setItem('token', data.access);
				retrieveUserDetails(data.access);

				Swal.fire({
					title: 'Login Successful',
					icon: 'success',
					text: 'Shop and Enjoy'
				})
			}
			else {
				Swal.fire({ 
					title: 'Authentication failed',
					icon: 'error',
					text: 'Check details and try again'
				})	

			}
		})

		setEmail('');
		setPassword('');
	}

	const retrieveUserDetails = (token) => {
		fetch('https://serene-sea-03250.herokuapp.com/users/', {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			}
		})
		.then(res => res.json())
		.then(data => {
			setUser({
				id: data._id,
				isAdmin: data.isAdmin
			})
		})
	}

	useEffect(() => {
		if(email !== '' && password !== '') {
			setActive(true);
		}
		else {
			setActive(false);
		}
	}, [email, password, isActive]);


	return (
		(user.id !== null) 
		?
		<Navigate to="/"/>
		:
		<Grid>
			<Paper elevation={4} className="paperStyle">
				<Grid align='center'>
					<Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
					<h2 className="mt-3 mb-4">Sign in</h2>
				</Grid>
				<TextField
					label='Email' 
					variant="outlined" 
					type='email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					fullWidth 
					required>
				</TextField>				
				<TextField 
					label='Password' 
					variant='outlined' 
					type='password'
					margin='normal' 
					value={password}
					onChange={e => setPassword(e.target.value)}
					fullWidth 
					required>
				</TextField>
				<FormControlLabel control={<Checkbox name="checkedB" color="default"/>} label="Remember me"/>
				{	isActive 
					?
					<Button type='submit' color='default' variant='contained' onClick={(e) => authenticate(e)} style={btnStyle} fullWidth>SIGN IN</Button>
					:
					<Button type='submit' color='default' variant='contained' style={btnStyle} fullWidth disabled>SIGN IN</Button>
				}
				<Typography> Not registered? {' '}
					<Link className="text-link" to={'/register'}>Create an account</Link>
				</Typography>
			</Paper>
		</Grid>
	)
}
