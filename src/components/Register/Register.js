import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const customId = "custom-id-yes";
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from);
    }
    if (error) {
        toast(error?.message, {
            toastId: customId
        })
    }

    return (
        <div className='d-flex justify-content-center mt-5'>
            <Form className='w-50'>
                <h1 className='text-center'>Register</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required />

                </Form.Group>
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

                <Button variant="dark" type="submit" onClick={(e) => {
                    e.preventDefault();
                    createUserWithEmailAndPassword(email, password)
                }}>
                    Submit
                </Button>
                {/* {error && <p>{error?.message}</p>} */}
                {<Link to='/login' className='reg-now'>
                    <p className='text-warning'>Already have an account? Login now!</p>
                </Link>}

            </Form>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default Register;