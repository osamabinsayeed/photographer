import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                    <Link to="/checkout">
                        <Button variant="dark">Proceed</Button>
                    </Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;