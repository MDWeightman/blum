import React from "react";
import firebase from "firebase";
import base, { firebaseApp } from "../../js/Base";
import "./Login.css";

class Login extends React.Component {

	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.authHandler({ user });
			}
		});
	}

	authHandler = async authData => {
		const userData = await base.fetch(authData.user.uid, { context: this });
		console.log(this.props);
		this.props.updateUser({
			uid: authData.user.uid,
			userData: authData.user,
		});
		
		this.props.history.push('/welcome');
	};

	authenticate = provider => {
		const authProvider = new firebase.auth[`${provider}AuthProvider`]();
		firebaseApp
			.auth()
			.signInWithPopup(authProvider)
			.then(this.authHandler);
	};
	
	render() {
		return (
			<div className="login">
				<div className="login-logo">
					<img src="/images/blum-logo.png" alt="blum logo" />		
				</div>
				<div className="login-tagline">
					A <b>Blüm</b> a day<br /> keeps the doctor away.
				</div>
				<div className="login-about">
					<b>Blüm</b> supports parents as their child grows.Aswell as allowing the creation of a private day-to-day album of 1-second videos documenting your childs development, <b>Blüm</b> also provides parents with key <b>developmental milestones</b> and care information to make sure they feel supported through that important stage of life.
				</div>
				<div className="login-buttons">
					<button className="facebook" onClick={() => this.authenticate("Facebook")}>Continue With Facebook</button>
					<button className="google" onClick={() => this.authenticate("Google")}>Continue With Google</button>
					<button className="twitter" onClick={() => this.authenticate("Twitter")}>Continue With Twitter</button>
					<button className="email" onClick={() => this.authenticate("Email")}>Continue With Email</button>
				</div>
			</div>
		);
	}
};

export default Login;