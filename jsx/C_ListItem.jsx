import React from 'react';


class C_ListItem extends React.Component{
    constructor (props){
        super(props);

        this.label = this.props.getLabel(this.props.treeNode);
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
        var iStyle = {paddingLeft : "2px"};
        var listStyle = this.state.hover ?  "onC_ItemHover" : null;
        return (<li onMouseOver = {this.mouseOver} onMouseOut = {this.mouseOut} className = {listStyle} onClick = {this.props.callback}> {this.props.getLabel(this.props.treeNode)}
                        {this.props.getChildren(this.props.treeNode) ? <i className = "fa fa-caret-right" style = {iStyle}></i> :null}
                    </li>);
    }
}

export default C_ListItem ;