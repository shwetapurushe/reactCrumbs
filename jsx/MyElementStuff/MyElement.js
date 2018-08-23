import React from 'react';

export default class MyElement extends React.Component
{
	constructor (props)//BIRTH
	{
		super(props);
		console.log("calling the CONSTRUCTOR of MyElement");
		this.state = {//setting the initial state for ES6
			greeting: "Hello",
			number : props.number
		};
	}

	componentWillReceiveProps (nextProps)
	{
		console.log("calling component WILL RECEIVE PROPS of MyElement");
		if(nextProps.number != this.props.number)
		{
			this.setState({number: nextProps.number});
		}
	}

	shouldComponentUpdate(nextProps)
	{
		console.log("calling SHOULD component UPDATE of MyElement");
		if(nextProps.number != this.props.number)
		{
			return true;
		}
		else
			return false;
	}

	componentWillUpdate()
	{
		console.log("calling component WILL UPDATE of MyElement");
	}

	componentDidUpdate()
	{
		console.log("calling component DID UPDATE of MyElement");
	}

	/*getInitialState()//getInitialState is not used in ES6 classes.//BIRTH
	{
		console.log("calling getInitialState of MyElement");
		return { greeting: "Hello Alpha"}
	}*/

	componentWillMount()//BIRTH
	{
		console.log("calling component WILL MOUNT of MyElement");
		//this.setState({greeting : "Hello Shweta"}); does not initiate one more render even if state is updated
	}

	componentDidMount()//BIRTH
	{
		console.log("calling the component DID MOUNT of MyElement");
	}


	render()//BIRTH
	{
		console.log("calling the RENDER of MyElement");

		return(
			<div>{this.state.greeting} {this.state.number}</div>
		);
	}
}