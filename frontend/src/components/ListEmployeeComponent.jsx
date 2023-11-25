import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

export default class ListEmployeeComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			employees: [],
		};
		this.addEmployee = this.addEmployee.bind(this);
		this.updateEmployee = this.updateEmployee.bind(this);
		this.deleteEmployee = this.deleteEmployee.bind(this);
		this.viewEmployee = this.viewEmployee.bind(this);
	}
	componentDidMount() {
		EmployeeService.getEmployees().then((response) => {
			this.setState({ employees: response.data });
		});
	}
	addEmployee() {
		this.props.history.push("/add-employee/_add");
	}
	updateEmployee(id) {
		this.props.history.push(`/add-employee/${id}`);
	}
	deleteEmployee(id) {
		EmployeeService.deleteEmployee(id).then((response) => {
			this.setState({
				employees: this.state.employees.filter(
					(employee) => employee.id !== id
				),
			});
		});
	}
	viewEmployee(id) {
		this.props.history.push(`/view-employee/${id}`);
	}
	render() {
		return (
			<div>
				<h2 className="text-center">Employee List</h2>
				<div className="row">
					<button className="btn btn-primary" onClick={this.addEmployee}>
						Add Employee
					</button>
				</div>
				<br></br>
				<div className="row">
					<table className="table table-striped table-bordered">
						<thead>
							<tr>
								<th>Employee First Name</th>
								<th>Employee Last Name</th>
								<th>Employee Email</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{this.state.employees.map((employee) => (
								<tr key={employee.id}>
									<td>{employee.firstName}</td>
									<td>{employee.lastName}</td>
									<td>{employee.emailId}</td>
									<td>
										<button
											className="btn btn-info"
											onClick={() =>
												this.updateEmployee(employee.id)
											}
										>
											Update
										</button>
										<button
											className="btn btn-danger"
											onClick={() =>
												this.deleteEmployee(employee.id)
											}
											style={{ marginLeft: "10px" }}
										>
											Delete
										</button>
										<button
											className="btn btn-secondary"
											onClick={() => this.viewEmployee(employee.id)}
											style={{ marginLeft: "10px" }}
										>
											View Details
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
