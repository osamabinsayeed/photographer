import React from 'react';
import { Card } from 'react-bootstrap';
import photo from './photographer.jpg'

const Hire = () => {
    // const photo = 
    return (
        <div className='container'>
            <Card className="bg-dark text-white">
                <Card.Img src={photo} />
                <Card.ImgOverlay>
                    <Card.Title className='text-primary'>
                        We are hiring
                    </Card.Title>

                    <Card.Text>
                        <h2 className='text-danger'>Want to work like a pro photographer?</h2>
                        <p >To join as my assistant photographer, apply :abc@def.com</p>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>

        </div>
    );
};

export default Hire;