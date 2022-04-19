import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase.init';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <div className='mt-5'>
                <h2>Or,</h2>
                <Button variant='dark' onClick={() => signInWithGoogle()}>
                    Login with google
                </Button>
            </div>
        </div>
    );
};

export default GoogleLogin;