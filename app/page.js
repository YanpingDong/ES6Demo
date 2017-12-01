import React from 'react'
import { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component{
	render(){
		return (
			<div>
				Home , 
				<Link to="/about">see about</Link>
			</div>
		);
	}
}

class About extends Component{
	render(){
		return (
			<h1>my svon</h1>
		);
	}
}
export { Home , About };