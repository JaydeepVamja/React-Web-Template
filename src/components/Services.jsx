import React from 'react'
import { Container } from 'react-bootstrap'
import { FaHome, FaPenNib, FaRegFileAlt } from 'react-icons/fa';

function Services() {
    return (
        <>
            <section>
                <div className="bg-service">
                    <Container>
                        <div className="title">
                            <h2 className='text-center pb-4'>Our Services</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <div className="service">
                                    <div className="service-icon-bg">
                                        <FaRegFileAlt className='icon' />
                                    </div>
                                    <h4>Planning</h4>
                                    <p>
                                        Our Services Line one<br />
                                        Servive line two
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="service">
                                    <div className="service-icon-bg">
                                        <FaHome className='icon' />
                                    </div>
                                    <h4>Interior</h4>
                                    <p>
                                        Our Services Line one<br />
                                        Servive line two
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="service">
                                    <div className="service-icon-bg">
                                        <FaPenNib className='icon' />
                                    </div>
                                    <h4>Exterior</h4>
                                    <p>
                                        Our Services Line one<br />
                                        Servive line two
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Services
