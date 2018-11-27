import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import firebase from "firebase";
import Login from "../Login/Login";
import Welcome from "../Welcome/Welcome";
import Setup from "../Setup/Setup";
import Celendar from "../Calendar/Calendar";
import base, { firebaseApp } from "../../js/Base";

class Router extends React.Component {

	state = {
		uid: null,
		userData: null,
	};	

	updateUser = userData => {
		this.setState(userData);
	}

	render() {
		return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={routeProps => <Login {...routeProps} {...this.state} updateUser={this.updateUser} ></Login>}  />
				<Route path="/welcome" component={routeProps => <Welcome {...routeProps} displayName={this.state.userData ? this.state.userData.displayName : ''} ></Welcome>} user={this.state.user} />
				<Route path="/Setup" component={Setup} user={this.state.user} />
				<Route path="/celendar" component={Celendar} user={this.state.user} />
			</Switch>
		</BrowserRouter>
		);
	}
}

export default Router;