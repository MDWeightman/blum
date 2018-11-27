import React from "react";
import firebase from "firebase";
import base, { firebaseApp } from "../../js/Base";
import "./Welcome.css";

class Welcome extends React.Component {
	state = { };

	render() {
		console.log(this.props.user);
		
		return (
			<div className="welcome">
				<div className="welcome-splash">
					<div className="welcome-splash-name">
						<div className="welcome-splash-name-text">{this.props.displayName}</div>
					</div>
					<img src="/images/welcome-splash.png" alt="Welcome" />
				</div>
				<div className="welcome-get-started">
					<button className="get-started">Get Started</button>
				</div>
			</div>
		);
	}
}

export default Welcome;