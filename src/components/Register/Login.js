import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const customId = "custom-id-yes";
    if (error) {
        toast(error?.message, {
            toastId: customId
        })
    }
    return (
        <div className='d-flex justify-content-center mt-5'>
            <Form className='w-50'>
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

                <Button onClick={() => signInWithEmailAndPassword(email, password)} variant="dark" type="submit">
                    Submit
                </Button>

                <ToastContainer></ToastContainer>
            </Form>
        </div>
    );
};

export default Login;