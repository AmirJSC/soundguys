import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'; 
import { Container } from 'react-bootstrap';
import { UserProvider } from './UserContext';
// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductView from './pages/ProductView';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Error from './pages/Error';
// Components
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';



function App() {

    const [user, setUser] = useState({
        id: null,
        isAdmin: null
    });

    // Function to clear local storage once user logs out. 
    const unsetUser = () => {
        localStorage.clear();
    }

    // To keep the user logged in even when the page refreshes. 
    useEffect(() => {
        fetch('https://serene-sea-03250.herokuapp.com/users/', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(typeof data._id !== 'undefined') {
                setUser({
                    id: data._id,
                    isAdmin: data.isAdmin
                })
            }
            else {
                setUser({
                    id: null,
                    isAdmin: null
                })
            }
        })
    }, [])


    return (
        <UserProvider value={{user, setUser, unsetUser}}>
        <Router>
            <AppNavbar/>
            <Routes>
                <Route exact path ='/' element={<Home/>}/>
                <Route exact path ='/products' element={<Products/>}/>
                <Route exact path ='/products/:productId' element={<ProductView/>}/>
                <Route exact path ='/products/category/:category' element={<Categories/>}/>
                <Route exact path ='/cart' element={<Cart/>}/>
                <Route exact path ='/profile' element={<Profile/>}/>
                <Route exact path ='/register' element={<Register/>}/>
                <Route exact path ='/login' element={<Login/>}/>
                <Route exact path ='/logout' element={<Logout/>}/>
                <Route exact path ='*' element={<Error/>}/>
            </Routes>
            <Footer/>
        </Router>
        </UserProvider>
    );
}

export default App;
