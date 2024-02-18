import React from 'react'
import { Container } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-bg">
                    <Container>
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-12">
                                <div className="footer-title mt-5">
                                    <h2>ArchiWeb</h2>
                                    <p className='mb-4'>
                                        Archiweb is an architectural consultant based in Berlin, Germany. We provide solutions for your architecture and residential design
                                    </p>
                                    <FaFacebook className='fs-3 me-4 text-white' />
                                    <FaTwitter className='fs-3 me-4 text-white' />
                                    <FaInstagram className='fs-3 me-4 text-white' />
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 offset-xl-1 col-12">
                                <div className="articles mt-5">
                                    <h4>Articles</h4>
                                    <p>
                                        7 Tips for Kids Friendly<br />
                                        Interior Design<br /><br />

                                        Smart Tips for Changing<br />
                                        a Room<br /><br />

                                        Eco-friendly design
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-lg-6 col-12">
                                <div className="links mt-5">
                                    <h4 className='mb-3'>Links</h4>
                                    <ul className="ps-0">
                                        <li className='mb-2'><a href="#">Link1</a></li>
                                        <li className='mb-2'><a href="#">Link2</a></li>
                                        <li className='mb-2'><a href="#">Link3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12">
                                <div className="location mt-5">
                                    <h4 className='mb-3'>Location</h4>
                                    <iframe src=
                                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
                                        width="295"
                                        height="221"
                                        frameBorder="0"
                                        style={{border:0}}
                                        allowFullScreen=""
                                        aria-hidden="false"
                                        tabIndex="0">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </footer>
        </>
    )
}

export default Footer
