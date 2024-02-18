import React from 'react';
import { Container } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Slider() {
    return (
        <>
            <section className='pt-5'>
                <Container fluid>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="solution-main position-relative">
                                <div className="solution">
                                    <div className="solution-content">
                                        <h2>
                                            Best Solution For<br/>
                                            Your Home
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet,<br />
                                            consectetur adipiscing elit ut<br/>
                                            aliquam, purus sit amet
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="slider">
                                <OwlCarousel className='owl-theme' loop margin={10} center nav responsive={{
                                    '0': {
                                        items: 1,
                                    },
                                    '767': {
                                        items: 1,
                                    },
                                    '992': {
                                        items: 1,
                                    }
                                }}>
                                    <div className='item'>
                                        <div className="slider-img">
                                            <img src={require('../image/archi1.jpg')} alt="main-slider-img-1" />
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="slider-img">
                                            <img src={require('../image/archi2.webp')} alt="main-slider-img-2" />
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Slider
