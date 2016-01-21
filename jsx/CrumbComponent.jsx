import React from 'react';

import CrumbContainer from './CrumbContainer';
import CrumbComponentConfig from './crumbComponentConfig';
import CrumbOptionsList from './crumbOptionsList.jsx';


class CrumbComponent extends React.Component{

    constructor (props){
        super(props);
        //////////////////////
        //initializing react state
        /////////////////////
        this.state = {
            crumbTrail : [],
            listOptions : []
        };

        /////////////////////
        // Creating weave session state
        /////////////////////
        this.settings = this.props.settings ? this.props.settings : new CrumbComponentConfig();
        this.busyStatus = window.dashboard_weave.root.getObject("isWeaveBusy");

        //sessioned crumb
        this.active_crumb = window.dashboard_weave.root.getObject("active_crumb");
        console.log("active_crumb", this.active_crumb);

        this.get_DataSources = this.get_DataSources.bind(this);
        this.add_First_Crumb = this.add_First_Crumb.bind(this);
        this.get_ListOptions = this.get_ListOptions.bind(this);
    }

    get_DataSources(){
        var tree = new weavejs.data.hierarchy.WeaveRootDataTreeNode(weave.root);

        this.add_First_Crumb(tree);
    }

    //when an active crumb is selected get its siblings
    get_ListOptions (){
        //getting the weave tree
        var names = [];
        for (var i in tree.children){names.push(tree.children[i].getLabel())}
        console.log("getting datasources", names);
        return names;
    }

    //adding initial data source crumb
    add_First_Crumb(tree){
        this.setState({crumbTrail : [tree.label]});
    }

    //REACT LIFECYCLE METHODS
    componentDidMount (){
        //////////////////////
        // Register callbacks after component added to DOM
        //////////////////////
        this.busyStatus.addImmediateCallback(this, this.get_DataSources);//retrieve the data sources as soon as weave loads and is no longer busy
        this.active_crumb.addImmediateCallback(this, this.get_ListOptions);
    }

    componentWillUnmount (){
        this.busyStatus.removeCallback(this, this.get_DataSources);
    };

    render (){
        //var blah = ["bluewhat", "blue", "qu", "aa", "anbalagan"];
        var listOptions = this.state.listOptions;
        var crumbTrail = this.state.crumbTrail;
        return (
            <div>
                <CrumbContainer crumbTrail = {crumbTrail}/>
                <CrumbOptionsList options = {listOptions}/>
            </div>
        );
    }
}

export default CrumbComponent;