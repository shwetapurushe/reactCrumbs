import React from 'react';

import CrumbContainer from './CrumbContainer';
import CrumbComponentConfig from './CrumbComponentConfig';
import CrumbOptionsList from './crumbOptionsList.jsx';


class CrumbComponent extends React.Component{

    constructor (props){
        super(props);


        /////////////////////
        // Creating weave session state
        /////////////////////
        this.settings = this.props.settings ? this.props.settings : new CrumbComponentConfig();
        this.busyStatus = window.dashboard_weave.root.getObject("isWeaveBusy");

        //sessioned crumb
        this.active_crumb = this.settings.activeCrumb;

        this.tree = new weavejs.data.hierarchy.WeaveRootDataTreeNode(weave.root);
        this.activeTreeNode = this.tree;//set the first node as active initially

        //CHANGING ACTIVE CRUMB
        this.active_crumb.value = this.tree.getLabel();

        //keeps a log of active crumbs and the tree node object it represents
        this.trailRegistry={};
        this.trailRegistry[this.active_crumb.value] = this.activeTreeNode;

        this.blah = [];

        this.manage_Crumbs = this.manage_Crumbs.bind(this);
        this.getActiveTree = this.getActiveTree.bind(this);
    }

    getActiveTree(){
        var label = this.active_crumb.value;
        if(this.trailRegistry[label]) {//if its is in the registry return its node
            this.activeTreeNode = this.trailRegistry[label];
            return this.trailRegistry[label];
        }

        var treeItems = this.activeTreeNode.getChildren();
        if(treeItems){
            for(var i = 0 ; i<treeItems.length;i++){
                var treeLabel = treeItems[i].getLabel();
                if(label === treeLabel){
                    this.activeTreeNode = treeItems[i];
                    this.trailRegistry[this.active_crumb.value] = this.activeTreeNode;
                    return this.activeTreeNode;
                }
            }
        }
    }


    manage_Crumbs (){

        if(this.blah.length == 0)
            this.blah = Object.keys(this.trailRegistry);
       // var crT = Object.keys(this.trailRegistry);
        var index= this.blah.indexOf(this.active_crumb.value);

        if(index == this.settings.activeIndex.value)
            this.blah.splice(index, Number.MAX_VALUE);

        if($.inArray(this.active_crumb.value, this.blah) == -1){
            this.blah.push(this.active_crumb.value);
        }

           /* this.active_index = crT.indexOf(this.active_crumb.value);
         //console.log("info", this.active_crumb.value,  this.active_index);
         crT.splice( this.active_index -1, Number.MAX_VALUE);
         crT.push(this.active_crumb.value);*/

        //return this.blah;
        //this.setState({crumbTrail : crT});
    }

    //REACT LIFECYCLE METHODS
    componentDidMount (){
        //////////////////////
        // Register callbacks after component added to DOM
        //////////////////////
        this.busyStatus.addImmediateCallback(this, this.manage_Crumbs);//retrieve the data sources as soon as weave loads and is no longer busy
        //this.active_crumb.addImmediateCallback(this, this.manage_Crumbs);
        this.active_crumb.addGroupedCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.tree).addGroupedCallback(this, this.forceUpdate);
    }

    componentWillUnmount (){
        this.busyStatus.removeCallback(this, this.manage_Crumbs);
        this.active_crumb.removeCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.tree).removeCallback(this, this.forceUpdate);
    }

    render (){
        var sessionCrumbContainer = this.settings.crumbContainer;
        var activeTree = this.getActiveTree();
        this.manage_Crumbs();
        console.log("crumbtrail", this.blah);

        var activeNodeChildren = activeTree.getChildren();

       /* console.log("**************NEW ROUND********************");
        console.log("active crumb", this.active_crumb.value);
        console.log("active tree node", this.activeTreeNode);
        console.log("active tree node children", activeNodeChildren);*/
        //console.log("registry", this.trailRegistry);


        return (
            <div>
                <CrumbContainer settings = {sessionCrumbContainer}
                                activeCrumb = {this.active_crumb}
                                activeNode={activeTree}
                                activeIndex = {this.settings.activeIndex}
                                crumbTrail= {this.blah}/>
                <CrumbOptionsList nodes = {activeNodeChildren} activeCrumb = {this.active_crumb}/>
            </div>
        );
    }
}

export default CrumbComponent;