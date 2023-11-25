import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

export default class ViewEmployeeController extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.match.params.id,
			employee: {},
		};

		this.updateDetails = this.updateDetails.bind(this);
	}
	componentDidMount() {
		EmployeeService.getEmployeeById(this.state.id).then((response) => {
			this.setState({ employee: response.data });
		});
	}

	updateDetails(id) {
		this.props.history.push(`/add-employee/${id}`);
	}
	render() {
		return (
			<div>
				<div className="card col-md-6 offset-md-3">
					<h3 className="text-center">Employee Details</h3>
					<div className="card-body">
						<div className="row">
							<label>Employee First Name</label>
							<div>{this.state.employee.firstName}</div>
						</div>
						<div className="row">
							<label>Employee Last Name</label>
							<div>{this.state.employee.lastName}</div>
						</div>
						<div className="row">
							<label>Employee Email Address : </label>
							<div>{this.state.employee.emailId}</div>
						</div>
						<br></br>
						<div className="row">
							<button
								className="btn btn-primary"
								onClick={() => this.updateDetails(this.state.id)}
							>
								Update Details
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
