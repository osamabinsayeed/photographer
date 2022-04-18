import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Service = ({ photoservice }) => {

    const { service, img, fee, description } = photoservice;
    return (
        <div className='col mb-5 '>
            <Card style={{ width: '18rem' }} className=''>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{service}</Card.Title>
                    <Card.Text>
                        Fee: {fee} <br />
                        Description: {description}
                    </Card.Text>
                    <Button variant="dark">Proceed</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;