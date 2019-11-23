import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';

export default class TastingNotes extends React.Component {

    constructor(public props: object) {
        super(props);
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
                        <form>
                            <div className="form-group">
                                <label htmlFor="WINE">WINE:</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <Row className="mb-3">
                                <Col>
                                    <label htmlFor="VINTAGE">VINTAGE:</label>
                                    <input type="text" className="form-control"/>
                                </Col>
                                <Col>
                                    <label htmlFor="PRICE">PRICE:</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">$</span>
                                        </div>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </Col>
                            </Row>
                            <div className="form-group">
                                <label htmlFor="PRODUCER">PRODUCER:</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="REGION_COUNTRY">REGION & COUNTRY:</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="GRAPE_VARIETY">GRAPE VARIETY:</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="RECOMMENDED_BY">RECOMMENDED BY:</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="PLACE_DATE_BOUGHT">PLACE & DATE BOUGHT:</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="PLACE_DATE_TASTED">PLACE & DATE TASTED:</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="APPEARANCE">APPEARANCE:</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="NOSE">NOSE:</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="TASTE">TASTE:</label>
                                <textarea className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="FINISH">FINISH:</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="OVERALL_IMPRESSION">OVERALL IMPRESSION:</label>
                                <input type="text" className="form-control"/>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        );
    }
}