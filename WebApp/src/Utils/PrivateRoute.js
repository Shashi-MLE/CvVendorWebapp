import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
// import UserContext from '../Context/UserContext'

// import {Outlet, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const isLogin= localStorage.getItem('token');
    return isLogin? children:<Navigate to ="/" />
 
}
export default PrivateRoutes;  