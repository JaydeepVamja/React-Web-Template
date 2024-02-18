import React from 'react'
import { Container } from 'react-bootstrap'

function About() {
    return (
        <>
            <section className='pt-5 pb-5'>
                <Container>
                    <div className="about-us">
                        <div className="row">
                            <div className="col-xl-8 order-xl-1 order-2">
                                <div className="about-img">
                                    <img src={require('../image/archi2.webp')} alt="" />
                                </div>
                            </div>
                            <div className="col-xl-4 order-xl-2 order-1 mt-0 mt-xl-5 pt-0 pt-xl-5 ps-4">
                                <div className="about">
                                    <div className="title">
                                        <h2>About Us</h2>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit ut
                                        aliquam, purus sit amet luctus
                                        venenatis, lectus magna fringilla
                                        urna, porttitor
                                    </p>
                                    <h6>Read more</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default About
