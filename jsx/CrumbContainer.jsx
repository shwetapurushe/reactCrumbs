import React from 'react';
import Crumb from './Crumb.jsx';
import CrumbOptionsList from './crumbOptionsList.jsx';
import CrumbComponentConfig from './crumbComponentConfig.js';

class CrumbContainer extends React.Component{

    constructor (props){
        super(props);
        /////////////////////
        // Creating weave session state
        /////////////////////
        this.settings = this.props.settings ? this.props.settings : new CrumbComponentConfig();
        this.busyStatus = window.dashboard_weave.root.getObject("isWeaveBusy");
        //////////////////////
        //initializing react state
        /////////////////////
        this.state = {
            crumbTrail : []
        };

        this.get_DataSources = this.get_DataSources.bind(this);
        this.add_First_Crumb = this.add_First_Crumb.bind(this);
    }

    get_DataSources(){
           var tree = new weavejs.data.hierarchy.WeaveRootDataTreeNode(weave.root);

            this.add_First_Crumb(tree);
           //getting the weave tree
           var names = [];
           for (var i in tree.children){names.push(tree.children[i].getLabel())}
           console.log("names", names);
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
    }

    componentWillUnmount (){
        this.busyStatus.removeCallback(this, this.get_DataSources);
    };

    render (){
        var crumbs = this.state.crumbTrail;
        console.log("crumbs", crumbs);
        var crumbUI = crumbs.map(function(name, index){
            return (<Crumb key = {index} title = {name}/>);
        });

        return (
           <div>
               <div className = "crumbsContainer">{crumbUI}</div>
           </div>
        );
    }
}
export default CrumbContainer;