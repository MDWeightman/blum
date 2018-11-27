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

	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.authHandler({ user });
			}
		});
	}

	render() {
		return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={routeProps => <Login {...routeProps} authenticate={this.authenticate}></Login>}  />
				<Route path="/welcome" component={Welcome} user={this.state.user} />
				<Route path="/Setup" component={Setup} user={this.state.user} />
				<Route path="/celendar" component={Celendar} user={this.state.user} />
			</Switch>
		</BrowserRouter>
		);
	}
}

export default Router;