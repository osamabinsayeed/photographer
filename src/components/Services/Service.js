import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Service = ({ photoservice }) => {

    const { service, img, fee } = photoservice;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
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