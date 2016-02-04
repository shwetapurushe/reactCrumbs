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
        this.updateRegistry = this.updateRegistry.bind(this);

        //init settings
        this.settings.activeCrumbName.value = this.tree.getLabel();
        this.registry = {};//holds a map of active crumb names with an object   name :  {name , actual tree node, parent node, children nodes}
        this.registry[this.settings.activeCrumbName.value] = this.tree;//first default crumb
        this.settings.crumbTrail = Object.keys(this.registry);
    }

    updateRegistry (){
        var label = this.settings.activeNode.value.getLabel();
        if(this.registry[label]){
            this.settings.activeNode.value = this.registry[label];
            var keys = Object.keys(this.registry);
            var keystoRemove = keys.splice(this.settings.activeIndex.value + 1, Number.MAX_VALUE);
            for(var i in keystoRemove){
                delete this.registry[keystoRemove[i]];
            }
            return;
        } //if its is in the registry return its node
        else{
           this.registry[this.settings.activeCrumbName.value] = this.settings.activeNode.value;
        }
    }

    //callback whenever the active crumb name is changed
    handleActiveCrumbChange (){
        //get the new trail from the registry
        this.updateRegistry();
        this.forceUpdate();
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
       this.settings.activeNode.value = this.registry[this.settings.activeCrumbName.value];
           return (
            <div>
                <CrumbContainer activeIndex = {this.settings.activeIndex} activeCrumbName = {this.settings.activeCrumbName}
                                activeNode = {this.settings.activeNode} trailMap = {this.registry} />
                <CrumbOptionsList activeCrumbName = {this.settings.activeCrumbName} activeNode = {this.settings.activeNode} trailMap = {this.registry}/>
            </div>
        );
    }
}

export default CrumbComponent;