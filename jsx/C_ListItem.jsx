import React from 'react';


class C_ListItem extends React.Component{
    constructor (props){
        super(props);

        this.label = props.treeNode.getLabel();
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.state = {hover: false};
       /* if(!this.label)
            this.label = props.treeItem.metadata.title;*/
        //this.updateLabel = this.updateLabel.bind(this);
    }

    mouseOver (){
        this.setState({hover:true});
    }

    mouseOut (){
        this.setState({hover:false});
    }
    componentDidMount (){

    }

    render (){
        var listStyle = this.state.hover ?  "onC_ItemHover" : null;
        return (<li onMouseOver = {this.mouseOver} onMouseOut = {this.mouseOut} className = {listStyle} onClick = {this.props.callback}> {this.props.treeNode.getLabel()}</li> );
    }
}

export default C_ListItem ;