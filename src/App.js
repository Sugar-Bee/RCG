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
				<Person name="Max" age="28"></Person>
				<Person name="Manu" age="22">
					My Hobbies: Racing
				</Person>
				<Person name="stephanie" age="56"></Person>
			</div>
		);
	}
}

export default App;
