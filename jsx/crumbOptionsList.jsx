import React from 'react';
import C_ListItem from './C_ListItem.jsx';

class CrumbOptionsList extends React.Component{

    constructor (props){
        super(props);
    }

    handleChange (event) {
        var value;
        value =  event.target.value;
        this.setState({value : value});

    }


    //when an active crumb is selected get its siblings
    get_ListOptions (){

    }

    handle_Options_Click (treeItem){

    }

    componentDidMount(){

    }

    filtered (value){
        var label = value.getLabel();
        return label.indexOf(this.state.value) != -1;
    }

    render(){

        return(<div className = "optionList">
                    <div className = "searchC">
                        <input type = "text" className = "searchFilter"></input>
                        <i> icon</i>
                    </div>

                    <div>
                        <ul>{listUI}</ul>
                    </div>
               </div>);
    }
}

export default CrumbOptionsList;
