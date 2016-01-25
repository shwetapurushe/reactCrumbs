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

        this.add_First_Crumb = this.add_First_Crumb.bind(this);
        this.get_ListOptions = this.get_ListOptions.bind(this);

        this.tree = new weavejs.data.hierarchy.WeaveRootDataTreeNode(weave.root);
    }


    //when an active crumb is selected get its siblings
    get_ListOptions (){
        var names = [];
        for (var i in this.tree.children){names.push(this.tree.children[i].getLabel())}
        console.log("getting datasources", names);
        this.setState({listOptions : names});
    }

    //adding initial data source crumb
    add_First_Crumb(tree){
        this.setState({crumbTrail : [this.tree.label]});
    }

    //REACT LIFECYCLE METHODS
    componentDidMount (){
        //////////////////////
        // Register callbacks after component added to DOM
        //////////////////////
        this.busyStatus.addImmediateCallback(this, this.add_First_Crumb);//retrieve the data sources as soon as weave loads and is no longer busy
        this.active_crumb.addImmediateCallback(this, this.get_ListOptions);
    }

    componentWillUnmount (){
        this.busyStatus.removeCallback(this, this.get_DataSources);
    };

    render (){
        var blah = ["bluewhat", "blue", "qu", "aa", "anbalagan"];
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