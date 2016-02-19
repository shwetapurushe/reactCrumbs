import React from 'react';

import CrumbContainer from './CrumbContainer';
import CrumbComponentConfig from './CrumbComponentConfig';
import CrumbOptionsList from './crumbOptionsList.jsx';


class CrumbComponent extends React.Component{

    constructor (props){
        super(props);
        this.state = {listVisibility : false};
        this.tree = this.props.tree;//TODO decide whether to store the tree reference
        this.settings = this.settings ? this.settings : new CrumbComponentConfig();
        this.handleActiveCrumbChange = this.handleActiveCrumbChange.bind(this);
        this.updateRegistry = this.updateRegistry.bind(this);
        this.getTreeChildren = this.getTreeChildren.bind(this);
        this.getTreeLabel = this.getTreeLabel.bind(this);
        this.toggleCrumbList = this.toggleCrumbList.bind(this);
        this.closeCrumbList = this.closeCrumbList.bind(this);

        //init settings
        this.settings.activeCrumbName.value = this.getTreeLabel();
        this.registry = {};//holds a map of active crumb names with an object   name :  {name , actual tree node, parent node, children nodes}
        this.registry[this.settings.activeCrumbName.value] = this.tree;//first default crumb
        this.settings.crumbTrail = Object.keys(this.registry);
    }

    //contributed by asanjay
    getTreeLabel(node) {
        var tree = this.props.tree;
        if(node)
            tree = node;
        if(tree[this.props.label] instanceof Function){
            return tree[this.props.label]();
        }else{
            return tree[this.props.label];
        }
    }

    //contributed by asanjay
    getTreeChildren(node){
        var tree = this.props.tree;
        if(node)
            tree = node;
        if(tree[this.props.children] instanceof Function){
            return tree[this.props.children]();
        }else{
            return tree[this.props.children];
        }
    }

    updateRegistry (){
        var label = this.getTreeLabel(this.settings.activeNode.value);
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

    toggleCrumbList (){
        if(this.state.listVisibility == false)
            this.setState({listVisibility : !this.state.listVisibility});
    }
    closeCrumbList (){
        this.setState({listVisibility : false});
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
        this.settings.activeCrumbName.removeCallback(this, this.handleActiveCrumbChange);
    }

    render (){
       this.settings.activeNode.value = this.registry[this.settings.activeCrumbName.value];
        var CrumbList =  <div>
                            <CrumbOptionsList activeCrumbName = {this.settings.activeCrumbName} activeNode = {this.settings.activeNode} trailMap = {this.registry}
                              getLabel = {this.getTreeLabel} getChildren = {this.getTreeChildren} close = {this.closeCrumbList}/>
                         </div>;
           return (
            <div>
                <CrumbContainer getLabel = {this.getTreeLabel} getChildren = {this.getTreeChildren} toggleCrumbList = {this.toggleCrumbList}
                                activeIndex = {this.settings.activeIndex} activeCrumbName = {this.settings.activeCrumbName}
                                activeNode = {this.settings.activeNode} trailMap = {this.registry} />
                {this.state.listVisibility ? CrumbList : null}
            </div>
        );
    }
}

export default CrumbComponent;