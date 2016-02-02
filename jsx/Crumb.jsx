import React from 'react';

class Crumb extends React.Component{

    constructor(props){
        super(props);
        this.state ={hover: false, crumbLabel : null};
        this.onMouse = this.onMouse.bind(this);// binding using the 'this' instance needed only for es6, normally done by React.createClass
        this.mouseOut = this.mouseOut.bind(this);
    }

    onMouse(){
        this.setState({hover : true});
    }

    mouseOut (){
        this.setState({hover : false});
    }

    componentWillMount (){

        this.setState({crumbLabel : this.props.label });
    }

    render(){

        var crumbStyle = this.state.hover ? "onCrumbHover" : "crumb";

        return (
            <div onMouseOver = {this.onMouse} onMouseOut = {this.mouseOut} onClick = {this.props.callback} className = {crumbStyle}>{this.state.crumbLabel}</div>
        );
    }
}

export default Crumb;