import React, { Component } from 'react';

class Hello extends Component {
	render() {
		let place = "Earth";
		return (
			<h1>Hello { place }!</h1>
		);
	}
}

class GroceryList extends Component {
	render() {
		return (
			<ul>
				<ListItem quantity="1" name="Bread" />
				<ListItem quantity="2" name="Eggs" />
				<ListItem quantity="5" name="Spinach" />
			</ul>
		);
	}
}

class ListItem extends Component {
	render() {
		return (
			<li>
				{ this.props.quantity }X { this.props.name }
			</li>
		);
	}
}

React.render(<Hello />, document.getElementById('root'));
React.render(<GroceryList />, document.getElementById('list'));