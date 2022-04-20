import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import GoogleLogin from './GoogleLogin/GoogleLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const [user2] = useAuthState(auth);
    let from = location.state?.from?.pathname || "/";
    // console.log(from);
    // console.log("hello");

    const [
        signInWithEmailAndPassword,
        error,
        user
    ] = useSignInWithEmailAndPassword(auth);
    const customId = "custom-id-yes";

    if (error) {
        toast(error?.message, {
            toastId: customId
        })

    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
    }
    const handleLoginWithEmail = () => {
        signInWithEmailAndPassword(email, password);

    }
    if (user2) {
        navigate(from, { replace: true });
    }
    // if (user) {
    //     console.log(from);


    // }


    return (
        <div className='d-flex justify-content-center mt-5'>
            <Form onSubmit={handleFormSubmit} className='w-50'>
                <h1 className='text-center'>Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                </Form.Group>

                <Button onClick={handleLoginWithEmail} variant="dark" type="submit">
                    Submit
                </Button>

                <ToastContainer></ToastContainer>
                <GoogleLogin></GoogleLogin>

                {<Link to='/register' className='reg-now'>
                    <p className='text-warning'>Didn't register yet? register now! </p>
                </Link>}
            </Form>

        </div>
    );
};

export default Login;