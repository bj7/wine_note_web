import React from 'react'
import {
    Row,
    Col,
    Nav,
    Navbar,
    NavDropdown,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';

export function NavHeader() {
    return (
        <Row>
            <Col lg={12} md={12} sm={12}>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Tasting Notes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/">New Note</Nav.Link>
                        <Nav.Link href="/varietal">Grape Varietal</Nav.Link>
                        <Nav.Link href="/vintage">Vintage</Nav.Link>
                        <NavDropdown title="Price" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/price/under_10">$10 and Under</NavDropdown.Item>
                            <NavDropdown.Item href="/price/under_20">Under $20</NavDropdown.Item>
                            <NavDropdown.Item href="/price/under_50">Under $50</NavDropdown.Item>
                            <NavDropdown.Item href="/price/under_100">Under $100</NavDropdown.Item>
                            <NavDropdown.Item href="/price/over_100">$100 +</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/region">Region</Nav.Link>
                        <Nav.Link href="/country">Country</Nav.Link>
                        <Nav.Link href="/rating">Rating</Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>
    )
}