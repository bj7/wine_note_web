import React from 'react';
import {
    Row,
    Col
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
                    <Col lg={true}>
                        <h1>Tasting Notes</h1>
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
                                <label htmlFor="PRODUCER">PRODUCER:</label>
                                <input type="text" className="form-control" onChange={(event) => {
                                    this.onChange({ field: 'producer', value: event.target.value });
                                }}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="REGION_COUNTRY">REGION & COUNTRY:</label>
                                <input type="text" className="form-control" onChange={(event) => {
                                    this.onChange({ field: 'region', value: event.target.value });
                                }}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="GRAPE_VARIETY">GRAPE VARIETY:</label>
                                <input type="text" className="form-control" onChange={(event) => {
                                    this.onChange({ field: 'grape', value: event.target.value });
                                }}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="RECOMMENDED_BY">RECOMMENDED BY:</label>
                                <input type="text" className="form-control" onChange={(event) => {
                                    this.onChange({ field: 'recommended', value: event.target.value });
                                }}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="PLACE_DATE_BOUGHT">PLACE & DATE BOUGHT:</label>
                                <input type="text" className="form-control" onChange={(event) => {
                                    this.onChange({ field: 'bought', value: event.target.value });
                                }}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="PLACE_DATE_TASTED">PLACE & DATE TASTED:</label>
                                <input type="text" className="form-control" onChange={(event) => {
                                    this.onChange({ field: 'tasted', value: event.target.value });
                                }}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="APPEARANCE">APPEARANCE:</label>
                                <input type="text" className="form-control" onChange={(event) => {
                                    this.onChange({ field: 'appearance', value: event.target.value });
                                }}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="NOSE">NOSE:</label>
                                <input type="text" className="form-control" onChange={(event) => {
                                    this.onChange({ field: 'nose', value: event.target.value });
                                }}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="TASTE">TASTE:</label>
                                <textarea className="form-control" onChange={(event) => {
                                    this.onChange({ field: 'taste', value: event.target.value });
                                }}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="FINISH">FINISH:</label>
                                <input type="text" className="form-control" onChange={(event) => {
                                    this.onChange({ field: 'finish', value: event.target.value });
                                }}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="OVERALL_IMPRESSION">OVERALL IMPRESSION:</label>
                                <input type="text" className="form-control" onChange={(event) => {
                                    this.onChange({ field: 'impression', value: event.target.value });
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