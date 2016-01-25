import React from 'react';

class CrumbOptionsList extends React.Component{

    constructor (props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value : ""};
    }

    handleChange (event) {
        var value;
        value =  event.target.value;
        this.setState({value : value});

    }

    render(){
        var listUI;
        var list;
        function filtered (value){
           return value.indexOf(this.state.value) != -1;
        }

        if(this.state.value)
            list = this.props.options.filter(filtered.bind(this));
        else
            list = this.props.options;

        listUI = list.map(function(listName, index){
            return (<li key = {index}>{listName}</li>)
        });


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
