import React from 'react';

import CrumbContainer from './CrumbContainer';
import CrumbComponentConfig from './CrumbComponentConfig';
import CrumbOptionsList from './crumbOptionsList.jsx';


class CrumbComponent extends React.Component{

    constructor (props){
        super(props);
        this.tree = this.props.tree;//TODO decide whether to store the tree reference
        this.settings = this.settings ? this.settings : new CrumbComponentConfig();
        this.handleActiveCrumbChange = this.handleActiveCrumbChange.bind(this);

        //init settings
        this.settings.activeCrumb.value = this.tree.getLabel();
        this.registry = {};//holds a map of active crumb names with an object   name :  {name , actual tree node, parent node, children nodes}
        this.registry[this.settings.activeCrumb.value] = this.tree;//first default crumb
        this.settings.crumbTrail = Object.keys(this.registry);
    }

    //callback whenever the active crumb name is changed
    handleActiveCrumbChange (){
        //get the new trail from the registry
        //get the nodes
        //call force update
        console.log("active crumb value changed", this.settings.activeCrumb.value);

    }


    //REACT LIFECYCLE METHODS
    componentDidMount (){
        this.settings.activeCrumb.addImmediateCallback(this, this.handleActiveCrumbChange);
    }

    componentWillUnmount (){
        this.settings.activeCrumb.removeCallback(this, handleActiveCrumbChange);
    }

    render (){

           return (
            <div>
                <CrumbContainer crumbTrail = {this.settings.crumbTrail}/>
            </div>
        );
    }
}

export default CrumbComponent;