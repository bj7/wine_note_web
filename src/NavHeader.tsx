import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
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
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
                <Navbar bg="light" expand="lg">
                    <Link to="/" className="navbar navbar-brand">Tasting Notes</Link>
                    {/* <Navbar.Brand href="/">Tasting Notes</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Link to="/" className="nav nav-link">New Note</Link>
                        <Link to="/varietal" className="nav nav-link">Grape Varietal</Link>
                        <Link to="/vintage" className="nav nav-link">Vinatge</Link>
                        <NavDropdown title="Price" id="basic-nav-dropdown">
                            <Link to="/price/under_10" className="dropdown-item">$10 and Under</Link>
                            <Link to="/price/under_20" className="dropdown-item">Under $20</Link>
                            <Link to="/price/under_50" className="dropdown-item">Under $50</Link>
                            <Link to="/price/under_100" className="dropdown-item">Under $100</Link>
                            <Link to="/price/over_100" className="dropdown-item">$100+</Link>
                        </NavDropdown>
                        <Link to="/region" className="nav nav-link">Region</Link>
                        <Link to="/country" className="nav nav-link">Country</Link>
                        <Link to="/rating" className="nav nav-link">Rating</Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}