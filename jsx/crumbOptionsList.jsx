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


    //when an active crumb is selected get its siblings
    get_ListOptions (){

    }

    //CHANGES ACTIVE CRUMB NAME
    handle_Options_Click (treeItem){
        this.props.activeCrumbName.value = treeItem.getLabel();
        console.log("changing aCrumb from list options",  this.props.activeCrumbName.value);
    }

    componentDidMount(){

    }

    filtered (value){
        var label = value.getLabel();
        return label.indexOf(this.state.listFilter) != -1;
    }

    createListElement (){
        var list;
        if(this.state.listFilter)
            list = this.props.nodes.filter(this.filtered.bind(this));
        else
            list = this.props.nodes;

        var x = list.map(function(node, index){
            return(<C_ListItem key = {index} treeNode = {node} callback = {this.handle_Options_Click.bind(this, node)}/>);
        }.bind(this));

        return x;
    }

    render(){

        var listUI = this.createListElement();

        return(<div className = "optionList">
                    <div className = "searchC">
                        <input type = "text" value = {this.state.listFilter} onChange = {this.handleChange} className = "searchFilter"></input>
                        <i className = "fa fa-search"></i>
                    </div>

                    <div>
                        <ul>{listUI}</ul>
                    </div>
               </div>);
    }
}

export default CrumbOptionsList;
