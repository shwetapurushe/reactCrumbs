import React from 'react';

class Greeting extends React.Component{

    constructor(props){
        console.log("props", props);
        super(props);
    }

    render(){
        return(<span>{this.props.name}</span>);
    }
}

Greeting.defaultProps = {name : "Shweta"}

export default Greeting;