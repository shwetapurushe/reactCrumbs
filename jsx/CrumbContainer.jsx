import React from 'react';
import Crumb from './Crumb.jsx';

import CrumbComponentConfig from './CrumbComponentConfig.js';

class CrumbContainer extends React.Component{

    constructor (props){
        super(props);
    }

    //CHANGES ACTIVE CRUMB NAME
    handleCrumbClick (name, index){
        this.props.activeCrumbName.value = name;
        console.log("changing aCrumb from container",  this.props.activeCrumbName.value, index);
    }

    componentDidMount (){

    }

    render (){
        var cr = this.props.crumbTrail;
        var crumbsUI = cr.map(function(name, index){
            return(<Crumb callback = {this.handleCrumbClick.bind(this, name, index)} key= {index} title = {name}/>);
        }.bind(this));

        return (
           <div>
               <div className = "crumbsContainer">{crumbsUI}</div>
           </div>
        );
    }
}
export default CrumbContainer;