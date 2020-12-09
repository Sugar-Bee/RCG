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

	switchNameHandler = () => {
		//console.log('clicked!');
		//DO NOT USE THIS WAY: this.state.persons[0].name='Max';
		this.setState({
			persons: [
				{ name: 'john', age: 28 },
				{ name: 'jack', age: 22 },
				{ name: 'stephanie', age: 35 }
			]
		});
	};

	render() {
		return (
			<div className="App">
				<h1>Hi, How are you!</h1>
				<p>subtitles!!!</p>
				<button onClick={this.switchNameHandler}>Switch Name</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}></Person>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}>
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
