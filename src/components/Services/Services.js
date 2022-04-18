import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState();
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='service-sec'>
            <div className='container'>
                <h1 className='text-center m-5'>My Services</h1>

                <div className='services row row-cols-lg-3 row-cols-1 row-cols-md-2 row-cols-sm-1'>
                    {
                        services?.map(photoservice =>
                            <Service
                                key={photoservice.id}
                                photoservice={photoservice}

                            ></Service>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;