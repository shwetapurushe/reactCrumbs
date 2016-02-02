import React from 'react';


class C_ListItem extends React.Component{
    constructor (props){
        super(props);

        this.label = props.treeNode.getLabel();
       /* if(!this.label)
            this.label = props.treeItem.metadata.title;*/
        //this.updateLabel = this.updateLabel.bind(this);
    }

    componentDidMount (){

    }

    render (){
        return (<li onClick = {this.props.callback}> {this.props.treeNode.getLabel()}</li> );
    }
}

export default C_ListItem ;