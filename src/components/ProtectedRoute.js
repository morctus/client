import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { setUser } from '../redux/userSlice';
import { showLoading, hideLoading } from '../redux/alertsSlice';

function ProtectedRoute(props) {

    const {user} = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getUser = async() => {
        try {
            const response = await axios.post('http://localhost:5000/user/get-user-info-by-id', {token: localStorage.getItem('token')}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
        );
        if (response.data.success) {
            dispatch(setUser(response.data.user));
        } else {
            navigate('/login');
        }
        } catch (error) {
            navigate('/login');
        }
    }
    useEffect(() => {
      
        if(!user) {
            getUser();
        }

    }, [user])
    
    

    if(localStorage.getItem('token')) {
        return props.children
    } else {
        return <Navigate to="/login" />
    }
}

export default ProtectedRoute