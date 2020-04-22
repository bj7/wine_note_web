import React from 'react';
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
import { number } from 'prop-types';

interface Input {
    field: string;
    value: string;
}
export default class TastingNotes extends React.Component {
    private form: {[index: string]: any};
    constructor(public props: object) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.save = this.save.bind(this);
        this.form = {};
    }

    onChange(input: Input) {
        console.log(input);
        this.form[input.field] = input.value;
    }

    save() {
        console.log(this.form);
    }

    render() {
        return (
            <div className="container">
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
                <Row>
                    <Col lg={6} md={8} sm={12}>
                        <form action="/save.js" method="post">
                            <div className="form-group">
                                <label htmlFor="WINE">WINE:</label>
                                <input type="text" className="form-control" onChange={(event) => {
                                    this.onChange({ field: 'wine', value: event.target.value });
                                }}/>
                            </div>
                            <Row className="mb-3">
                                <Col>
                                    <label htmlFor="VINTAGE">VINTAGE:</label>
                                    <input type="text" className="form-control" onChange={(event) => {
                                        this.onChange({ field: 'vintage', value: event.target.value });
                                    }}/>
                                </Col>
                                <Col>
                                    <label htmlFor="PRICE">PRICE:</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">$</span>
                                        </div>
                                        <input type="number" className="form-control" onChange={(event) => {
                                            this.onChange({ field: 'price', value: event.target.value });
                                        }}/>
                                    </div>
                                </Col>
                            </Row>
                            <div className="form-group">
                                <label htmlFor="REGION">REGION:</label>
                                <input type="text" className="form-control" onChange={(event) => {
                                    this.onChange({ field: 'region', value: event.target.value });
                                }}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="COUNTRY">REGION:</label>
                                <input type="text" className="form-control" onChange={(event) => {
                                    this.onChange({ field: 'country', value: event.target.value });
                                }}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="GRAPE_VARIETY">GRAPE VARIETY:</label>
                                <input type="text" className="form-control" onChange={(event) => {
                                    this.onChange({ field: 'grape', value: event.target.value });
                                }}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="NOTES">NOTES:</label>
                                <textarea className="form-control" onChange={(event) => {
                                    this.onChange({ field: 'notes', value: event.target.value });
                                }}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="RATING">OVERALL RATING:</label>
                                <input type="text" className="form-control" onChange={(event) => {
                                    this.onChange({ field: 'rating', value: event.target.value });
                                }}/>
                            </div>
                        </form>
                        <button type="submit" className="btn btn-primary" onClick={this.save}>Save</button>
                    </Col>
                </Row>
            </div>
        );
    }
}