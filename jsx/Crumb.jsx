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
        var label = this.props.getLabel(this.props.node);
        this.setState({crumbLabel : label });
    }

    render(){

        var crumbStyle = this.state.hover ? "onCrumbHover" : "crumb";
        var iStyle = {paddingLeft : "2px"};
        return (
            <div onMouseOver = {this.onMouse} onMouseOut = {this.mouseOut} onClick = {this.props.callback} className = {crumbStyle}>{this.state.crumbLabel}
                {this.props.getChildren(this.props.node) ? <i className = "fa fa-chevron-circle-right" style = {iStyle}></i> : null}
            </div>
        );
    }
}

export default Crumb;