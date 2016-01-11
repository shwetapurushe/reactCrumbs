import React from 'react';

class Crumb extends React.Component{

    constructor(props){
        super(props);
        this.state ={hover: false};
        this.onMouse = this.onMouse.bind(this);// binding using the 'this' instance needed only for es6, normally done by React.createClass
        this.mouseOut = this.mouseOut.bind(this);
    }

    onMouse(){
        this.setState({hover : true});
    }

    mouseOut (){
        this.setState({hover : false});
    }
    render(){

        var crumbStyle;
        if(this.state.hover){
            crumbStyle = "onHover";
        }
        else
            crumbStyle = "crumb";

        return (
            <div onMouseOver = {this.onMouse} onMouseOut = {this.mouseOut}   className = {crumbStyle}>Crumb</div>
        );
    }
}

export default Crumb;