import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
	state = {
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Manu', age: 22 },
			{ name: 'stephanie', age: 20 }
		],
		otherState: 'some other value or array'
	};

	switchNameHandler = (newName) => {
		this.setState({
			persons: [
				{ name: newName, age: 28 },
				{ name: 'jack', age: 22 },
				{ name: 'stephanie', age: 35 }
			]
		});
	};

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{ name: 'Max', age: 28 },
				{ name: event.target.value, age: 22 },
				{ name: 'stephanie', age: 10 }
			]
		});
	};

	render() {
		return (
			<div className="App">
				<h1>Hi, How are you!</h1>
				<p>subtitles!!!</p>
				<button onClick={this.switchNameHandler.bind(this, 'Maximillian')}>
					Switch Name
				</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}></Person>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={this.switchNameHandler.bind(this, 'Max!!')}
					changed={this.nameChangedHandler}>
					My Hobbies: Racing
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}></Person>
			</div>
		);
	}
}

export default App;
