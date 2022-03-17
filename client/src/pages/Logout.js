import { Navigate } from 'react-router-dom';
import UserContext from  '../UserContext';
import { useContext, useEffect } from 'react';

export default function Logout() {

	const { unsetUser, setUser } = useContext(UserContext);
	
	unsetUser();
	useEffect(() => {setUser({id: null})}, []);

	return (
		<Navigate to='/login'/>
	)
}