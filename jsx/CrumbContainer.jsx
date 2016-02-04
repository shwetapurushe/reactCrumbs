import React from 'react';
import Crumb from './Crumb.jsx';

import CrumbComponentConfig from './CrumbComponentConfig.js';

class CrumbContainer extends React.Component{

    constructor (props){
        super(props);
    }

    //CHANGES ACTIVE CRUMB NAME
    handleCrumbClick (key, index){
        this.props.activeIndex.value = index;
        this.props.activeNode.value = this.props.trailMap[key];
        this.props.activeCrumbName.value = key;
    }

    componentDidMount (){

    }

    render (){
        var cr = Object.keys(this.props.trailMap)//getting the latest trail i.e. names of nodes in the registry
        var crumbsUI = cr.map(function(key, index){
            return(<Crumb  getLabel = {this.props.getLabel} getChildren = {this.props.getChildren}
                           callback = {this.handleCrumbClick.bind(this, key, index)} key= {index} node= {this.props.trailMap[key]}/>);
        }.bind(this));

        return (
           <div>
               <div className = "crumbsContainer">{crumbsUI}</div>
           </div>
        );
    }
}
export default CrumbContainer;