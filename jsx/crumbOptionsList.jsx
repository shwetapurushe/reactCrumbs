import React from 'react';
import C_ListItem from './C_ListItem.jsx';

class CrumbOptionsList extends React.Component{

    constructor (props){
        super(props);
        this.state = {listFilter : ""};
        this.createListElement = this.createListElement.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        var value;
        value =  event.target.value;
        this.setState({listFilter : value});

    }

    //CHANGES ACTIVE CRUMB NAME
    handle_Options_Click (treeItem){
        this.props.activeNode.value = treeItem;
        this.props.activeCrumbName.value = treeItem.getLabel();
    }

    componentDidMount(){

    }

    filtered (value){
        var label = value.getLabel().toUpperCase();
        return label.indexOf(this.state.listFilter.toUpperCase()) != -1;
    }

    createListElement (){
        var list;
        var nodes;
        var activeNode = this.props.trailMap[this.props.activeCrumbName.value];
        if(activeNode) nodes = activeNode.getChildren();

        if(nodes){
            list = this.state.listFilter ? nodes.filter(this.filtered.bind(this)) :  nodes;

            var ui = list.map(function(node, index){
                return(<C_ListItem key = {index} treeNode = {node} callback = {this.handle_Options_Click.bind(this, node)}/>);
            }.bind(this));
        }
        return ui;
    }

    render(){

        var listUI = this.createListElement();

        if(listUI)
            return(<div className = "optionList">
                        <div className = "searchC">
                             <input type = "text" value = {this.state.listFilter} onChange = {this.handleChange} className = "searchFilter"></input>
                            <i className = "fa fa-search"></i>
                         </div>

                <div><ul>{listUI}</ul></div>
            </div>);
        else
            return(<span></span>)
    }
}

export default CrumbOptionsList;
