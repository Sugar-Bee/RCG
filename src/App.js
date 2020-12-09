import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hi, How are you!</h1>
				<p>subtitles!!!</p>
				<Person></Person>
			</div>
		);
	}
}

export default App;
