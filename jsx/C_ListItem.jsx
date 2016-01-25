import React from 'react';


class C_ListItem extends React.Component{
    constructor (props){
        super(props);
        this.label = props.treeItem.label;
        if(!this.label)
            this.label = props.treeItem.metadata.title;
    }

    render (){
        return (<li onClick = {this.props.callback}> {this.label}</li> );
    }
}

export default C_ListItem ;