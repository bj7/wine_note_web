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
import { NavHeader } from './NavHeader'
import Axios from 'axios'

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
		Axios.post('/save', {
			params: {
				saveData: this.form
			}
		})
			.then(res => {
				console.log(res);

			})
	}

	render() {
		return (
			<div className="container">
				{/* <NavHeader/> */}
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
								<label htmlFor="COUNTRY">COUNTRY:</label>
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