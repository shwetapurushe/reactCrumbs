import React from 'react';
import Crumb from './Crumb.jsx';

import CrumbComponentConfig from './CrumbComponentConfig.js';

class CrumbContainer extends React.Component{

    constructor (props){
        super(props);
        this.active_crumb = this.props.activeCrumb;
        this.active_index = this.props.activeIndex;
    }

    handleCrumbClick (name, index){
        //CHANGING ACTIVE CRUMB
        this.active_index.value = index;
        this.active_crumb.value = name;
        //console.log("setting the value of active crumb linkable variable", active_crumb.value);
    }

    componentDidMount (){

    }

    render (){
        var crumbs = this.props.crumbTrail;
        var crumbUI = [];
        if(crumbs){
            //console.log("CrumbContainer contains", crumbs);
             crumbUI = crumbs.map(function(name, index){
                return (<Crumb callback = {this.handleCrumbClick.bind(this, name, index)} key = {index}  title={name}/>);
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