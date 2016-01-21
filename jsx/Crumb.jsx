import React from 'react';

class Crumb extends React.Component{

    constructor(props){
        super(props);
        this.state ={hover: false, crumb_Title : null};
        this.onMouse = this.onMouse.bind(this);// binding using the 'this' instance needed only for es6, normally done by React.createClass
        this.mouseOut = this.mouseOut.bind(this);
    }

    onMouse(){
        this.setState({hover : true});
    }

    mouseOut (){
        this.setState({hover : false});
    }

    handleClick (){
        //update the active crumb and trigger callback
        var active_crumb = window.dashboard_weave.root.getObject("active_crumb");
        active_crumb.value = this.state.crumb_Title;
    }

    componentWillMount (){

        this.setState({crumb_Title : this.props.title });
    }

    render(){

        var crumbStyle;
        if(this.state.hover){
            crumbStyle = "onHover";
        }
        else
            crumbStyle = "crumb";

        return (
            <div onMouseOver = {this.onMouse} onMouseOut = {this.mouseOut} onClick = {this.handleClick} className = {crumbStyle}>{this.state.crumb_Title}</div>
        );
    }
}

export default Crumb;