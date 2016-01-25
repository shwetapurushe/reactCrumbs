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
    }

    //REACT LIFECYCLE METHODS
    componentDidMount (){
        //////////////////////
        // Register callbacks after component added to DOM
        //////////////////////
        this.busyStatus.addImmediateCallback(this, this.add_Crumb);//retrieve the data sources as soon as weave loads and is no longer busy
    }

    componentWillUnmount (){
        this.busyStatus.removeCallback(this, this.add_Crumb);
    };

    render (){
        var sessionCrumbContainer = this.settings.crumbContainer;
        return (
            <div>
                <CrumbContainer settings = {sessionCrumbContainer} activeCrumb = {this.settings.activeCrumb} tree = {this.tree}/>
                <CrumbOptionsList nodes = {this.tree.children} activeCrumb = {this.settings.activeCrumb}/>
            </div>
        );
    }
}

export default CrumbComponent;