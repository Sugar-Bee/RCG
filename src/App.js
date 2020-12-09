import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		// return (
		// 	<div className="App">
		// 		<h1>Hi, How are you!</h1>
		// 	</div>
		// );
		//return React.createElement('div', null, 'h1', 'This also works!');
		return React.createElement(
			'div',
			null,
			React.createElement('h1', null, 'Now h1 works!')
		);
	}
}

export default App;
