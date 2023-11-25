import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ViewEmployeeController from "./components/ViewEmployeeController";

function App() {
	return (
		<div>
			<Router>
				<HeaderComponent />
				<div className="container">
					<Switch>
						<Route
							path="/"
							exact
							component={ListEmployeeComponent}
						></Route>
						<Route
							path="/employees"
							component={ListEmployeeComponent}
						></Route>
						<Route
							path="/add-employee/:id"
							component={CreateEmployeeComponent}
						></Route>
						<Route
							path="/view-employee/:id"
							component={ViewEmployeeController}
						></Route>
					</Switch>
				</div>
				<FooterComponent />
			</Router>
		</div>
	);
}

export default App;
