import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React from 'react';



function Login() {
    return (

        <Container style={{ paddingTop: '8rem' }}>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card border="primary" bg="light" style={{ width: '25rem', height: '14rem', paddingTop: '1rem' }}>
                        <Form className="container">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="User"
                                className="mb-3"
                            >
                                <Form.Control placeholder="User" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>
                            <Button style={{marginLeft:'8rem',marginTop:'1rem'}} variant="success" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>

    )}


export default Login;