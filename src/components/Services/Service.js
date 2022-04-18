import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Service = ({ photoservice }) => {

    const { service, img, fee } = photoservice;
    return (
        <div className='col mb-5 ms-4'>
            <Card style={{ width: '18rem' }} className=''>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{service}</Card.Title>
                    <Card.Text>
                        Fee: {fee}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;