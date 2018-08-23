/**
 * Created by Shweta on 8/21/16.
 */
import React from 'react';
import MyElement from './MyElement';

export default class MyApp extends React.Component
{
	constructor(props)
	{
		super(props);
		console.log("CONSTRUCTOR of myAPP");

		this.increment = this.increment.bind(this);

		this.state = {
			number: 9
		}
	}

	increment ()
	{
		console.log("BUTTON click handler");
		this.setState({
			number : this.state.number + 1
		});
	}

	componentWillMount()
	{
		console.log("COMPONENT WILL MOUNT of MyApp");
	}

	render()
	{
		console.log("RENDER MyAPP");

		return(
			<div>
				<button onClick={ this.increment }>Click</button>
				<MyElement number={ this.state.number }/>
			</div>
		);
	}
}