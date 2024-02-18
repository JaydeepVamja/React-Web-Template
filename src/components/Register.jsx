import React from 'react'
import { Button, Form, Container } from 'react-bootstrap'

function Register() {
    return (
        <>
            <section>
                <div className="register pb-5 pt-5">
                    <Container>
                        <h2 className='text-center fw-bold pb-3'>Create Account</h2>
                        <Form>
                            <Form.Group controlId="formGridName" className='mb-4'>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group controlId="formGridEmail" className='mb-4'>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formGridPassword" className='mb-4'>
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
        </>
    )
}

export default Register
