import React from 'react';
import Crumb from './Crumb.jsx';

import CrumbComponentConfig from './CrumbComponentConfig.js';

class CrumbContainer extends React.Component{

    constructor (props){
        super(props);
        this.active_crumb = this.props.activeCrumb;


        this.state = {
            crumbTrail : [this.active_crumb.value]
        }
        this.add_Crumb = this.add_Crumb.bind(this);

    }


    add_Crumb (){

        var crT = this.state.crumbTrail;
        if($.inArray(this.active_crumb.value, crT) == -1)
            crT.push(this.active_crumb.value);
        //this.setState({crumbTrail : crT});
    }

    handleCrumbClick (name){
        //CHANGING ACTIVE CRUMB
        this.active_crumb.value = name;
        //console.log("setting the value of active crumb linkable variable", active_crumb.value);
    }

    componentDidMount (){
        this.active_crumb.addImmediateCallback(this, this.add_Crumb);
    }

    render (){


        var crumbs = this.state.crumbTrail;
        var crumbUI = [];
        if(crumbs){
            //console.log("CrumbContainer contains", crumbs);
             crumbUI = crumbs.map(function(name, index){
                return (<Crumb callback = {this.handleCrumbClick.bind(this, name)} key = {index}  title={name}/>);
            }.bind(this));
        }

        return (
           <div>
               <div className = "crumbsContainer">{crumbUI}</div>
           </div>
        );
    }
}
export default CrumbContainer;