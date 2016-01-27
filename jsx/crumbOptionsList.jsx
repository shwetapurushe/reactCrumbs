import React from 'react';
import C_ListItem from './C_ListItem.jsx';

class CrumbOptionsList extends React.Component{

    constructor (props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.get_ListOptions = this.get_ListOptions.bind(this);
        //this.handle_Options_Click = this.handle_Options_Click.bind(this);
        this.active_crumb = this.props.activeCrumb;
        this.state = {value : ""};
    }

    handleChange (event) {
        var value;
        value =  event.target.value;
        this.setState({value : value});

    }


    //when an active crumb is selected get its siblings
    get_ListOptions (){
        var names = [];
        for (var i in this.props.nodes){names.push(this.props.nodes[i].getLabel())}
        //console.log("list options", names);
        this.setState({listOptions : names});
    }

    handle_Options_Click (treeItem){
        //CHANGING ACTIVE CRUMB
        var label = treeItem.getLabel();
        this.active_crumb.value = label;
    }

    componentDidMount(){
        this.active_crumb.addImmediateCallback(this, this.get_ListOptions);
    }

    filtered (value){
        var label = value.getLabel();
        return label.indexOf(this.state.value) != -1;
    }

    render(){
        var listUI;
        var list;
        if(this.state.value)
            list = this.props.nodes.filter(this.filtered.bind(this));
        else
            list = this.props.nodes;

        listUI = list.map(function(listItem, index){
            return (<C_ListItem  key= {index} treeItem = {listItem} callback = {this.handle_Options_Click.bind(this, listItem)}/>);
        }.bind(this));//binding the Options list component


        return(<div className = "optionList">
                    <div className = "searchC">
                        <input type = "text" value = {this.state.value} className = "searchFilter" onChange= {this.handleChange}></input>
                        <i> icon</i>
                    </div>

                    <div>
                        <ul>{listUI}</ul>
                    </div>
               </div>);
    }
}

CrumbOptionsList.defaultProps = {options : []};
export default CrumbOptionsList;
