import React from 'react';

import CrumbContainer from './CrumbContainer';
import CrumbComponentConfig from './CrumbComponentConfig';
import CrumbOptionsList from './crumbOptionsList.jsx';


class CrumbComponent extends React.Component{

    constructor (props){
        super(props);
        //////////////////////
        //initializing react state
        /////////////////////
        this.state = {
           listOptions : []
        };

        /////////////////////
        // Creating weave session state
        /////////////////////
        this.settings = this.props.settings ? this.props.settings : new CrumbComponentConfig();
        this.busyStatus = window.dashboard_weave.root.getObject("isWeaveBusy");

        //sessioned crumb
        this.active_crumb = this.settings.activeCrumb;

        this.tree = new weavejs.data.hierarchy.WeaveRootDataTreeNode(weave.root);
        this.previousNode = this.tree;
        this.active_crumb.value = this.tree.getLabel();
        this.getActiveCrumb = this.getActiveCrumb.bind(this);
    }

    //REACT LIFECYCLE METHODS
    componentDidMount (){
        //////////////////////
        // Register callbacks after component added to DOM
        //////////////////////
        this.busyStatus.addImmediateCallback(this, this.add_Crumb);//retrieve the data sources as soon as weave loads and is no longer busy
        this.active_crumb.addGroupedCallback(this, this.forceUpdate);//retrieve the data sources as soon as weave loads and is no longer busy
        Weave.getCallbacks(this.tree).addGroupedCallback(this, this.forceUpdate);
    }

    componentWillUnmount (){
        this.busyStatus.removeCallback(this, this.add_Crumb);
    }

    getActiveCrumb(){
        var label = this.active_crumb.value;
        var treeItems = this.previousNode.getChildren();
        if(treeItems){
            for(var i = 0 ; i<treeItems.length;i++){
                var treeLabel = treeItems[i].getLabel();
                if(label === treeLabel){
                    this.previousNode = treeItems[i]
                    return treeItems[i].getChildren();
                }
            }
            return treeItems;
        }


    }

    render (){
        var sessionCrumbContainer = this.settings.crumbContainer;
        var treeItems = this.getActiveCrumb();
        return (
            <div>
                <CrumbContainer settings = {sessionCrumbContainer} activeCrumb = {this.settings.activeCrumb} />
                <CrumbOptionsList nodes = {treeItems} activeCrumb = {this.settings.activeCrumb}/>
            </div>
        );
    }
}

export default CrumbComponent;