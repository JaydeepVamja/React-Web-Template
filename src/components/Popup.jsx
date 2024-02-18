import React, { useState } from 'react'
import Header from './Header';
import {Container, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Popup() {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleCloseLoginModal = () => {
        setShow(false);
    };

    const handleSubmit = () => {

    }


    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='border-bottom-0'>
                </Modal.Header>
                <Modal.Body>
                    <h2 className='text-center fw-bold'>Log In</h2>
                    <Form onSubmit={handleSubmit} className='p-4'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                            <Link to="" className="">Forgot your password?</Link>
                        </Form.Group>
                        <Button variant="outline-success" type="submit">
                            Log In
                        </Button>
                        <p className="text-center p-3">
                            Don’t have an account yet? <Link to="" className="" onClick={() => { handleShow1(); handleCloseLoginModal(); }}>Register now</Link>
                        </p>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton className='border-bottom-0'>
                </Modal.Header>
                <Modal.Body>
                    <section>
                        <div className="register pb-5 pt-5">
                            <Container>
                                <h2 className='text-center fw-bold pb-3'>Create Account</h2>
                                <Form>
                                    <Form.Group controlId="formGridName" className='mb-4'>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" />
                                    </Form.Group>

                                    <Form.Group controlId="formGridEmail" className='mb-4'>
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group controlId="formGridPassword" className='mb-4'>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>

                                    <Button variant="outline-success" type="submit">
                                        Register
                                    </Button>
                                </Form>
                            </Container>
                        </div>
                    </section>
                </Modal.Body>
            </Modal>

            <Header onClickModal={handleShow} />
        </>
    )
}

export default Popup
