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
        this.settings.activeCrumbName.value = this.tree.getLabel();
        this.registry = {};//holds a map of active crumb names with an object   name :  {name , actual tree node, parent node, children nodes}
        this.registry[this.settings.activeCrumbName.value] = this.tree;//first default crumb
        this.settings.crumbTrail = Object.keys(this.registry);
    }

    //callback whenever the active crumb name is changed
    handleActiveCrumbChange (){
        //get the new trail from the registry
        //get the nodes
        //toggle list visibility
        //call force update
    }


    //REACT LIFECYCLE METHODS
    componentDidMount (){
        this.settings.activeCrumbName.addImmediateCallback(this, this.handleActiveCrumbChange);
        Weave.getCallbacks(this.tree).addGroupedCallback(this, this.forceUpdate);
    }

    componentWillUnmount (){
        this.settings.activeCrumbName.removeCallback(this, handleActiveCrumbChange);
    }

    render (){
        var activeNode = this.registry[this.settings.activeCrumbName.value];
        //console.log("active node", activeNode);
           return (
            <div>
                <CrumbContainer activeCrumbName = {this.settings.activeCrumbName} crumbTrail = {this.settings.crumbTrail}/>
                <CrumbOptionsList activeCrumbName = {this.settings.activeCrumbName} nodes = {activeNode.getChildren()}/>
            </div>
        );
    }
}

export default CrumbComponent;