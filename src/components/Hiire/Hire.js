import React from 'react';
import { Card } from 'react-bootstrap';
import photo from './photographer.jpg'

const Hire = () => {
    // const photo = 
    return (
        <div className='container mb-5' id='hire'>
            <Card className="bg-dark text-white">
                <Card.Img src={photo} />
                <Card.ImgOverlay>
                    <Card.Title className='text-primary'>
                        We are hiring
                    </Card.Title>

                    <Card.Text>
                        <span className='text-danger'>Want to work like a pro photographer?</span>
                        <br />
                        <span className='text-light'>To join as my assistant photographer, apply :abc@def.com</span>

                    </Card.Text>
                </Card.ImgOverlay>
            </Card>

        </div>
    );
};

export default Hire;