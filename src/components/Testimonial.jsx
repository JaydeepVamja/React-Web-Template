import React from 'react'
import { Container } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';

function Testimonial() {
    return (
        <>
            <section className='pt-5 pb-5'>
                <Container>
                    <div className="testimonial">
                        <div className="title">
                            <h2 className='text-center'>Testimonial</h2>
                        </div>
                        <div className="testi-slider pt-5">
                            <OwlCarousel className='owl-theme' loop margin={10} dots responsive={{
                                '0': {
                                    items: 1,
                                },
                                '767': {
                                    items: 1,
                                },
                                '992': {
                                    items: 2,
                                }
                            }}>
                                <div className='item'>
                                    <div className="d-md-flex d-block align-items-center">
                                        <div className="testi-img">
                                            <img src={require('../image/team_1.jpg')} alt="" />
                                        </div>
                                        <div className="testi-content ps-4">
                                            <h4>James Passaquindici Arcand</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet,<br />
                                                consectetur adipiscing elit ut<br />
                                                aliquam, purus sit amet luctus venenatis
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                <div className="d-md-flex d-block align-items-center">
                                        <div className="testi-img">
                                            <img src={require('../image/team_2.jpg')} alt="" />
                                        </div>
                                        <div className="testi-content ps-4">
                                            <h4>Abram Schleifer</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet,<br />
                                                consectetur adipiscing elit ut<br />
                                                aliquam, purus sit amet luctus venenatis
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                <div className="d-md-flex d-block align-items-center">
                                        <div className="testi-img">
                                            <img src={require('../image/team_3.jpg')} alt="" />
                                        </div>
                                        <div className="testi-content ps-4">
                                            <h4>James Arcand</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet,<br />
                                                consectetur adipiscing elit ut<br />
                                                aliquam, purus sit amet luctus venenatis
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Testimonial
