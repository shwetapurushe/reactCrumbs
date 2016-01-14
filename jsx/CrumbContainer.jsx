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
    }

    componentDidMount (){
        //////////////////////
        // Register callbacks after component added to DOM
        //////////////////////
        this.busyStatus.addImmediateCallback(this, this.get_DataSources);
    }

    componentWillUnmount (){
        this.busyStatus.removeCallback(this, this.get_DataSources);
    };

    get_DataSources(){
           var tree = new weavejs.data.hierarchy.WeaveRootDataTreeNode(weave.root);

           //getting the weave tree
           var names = [];
           for (var i in tree.children){names.push(tree.children[i].getLabel())}
          // console.log("names", names);
           return names;

    }

    render (){
        var crumbs = [];
        //var dd= ["bluewhat", "blue", "qu", "aa", "anbalagan"];
        for(var i = 0; i < 3; i++) {
            crumbs.push(<Crumb/>);

        }

        return (
           <div>
               <div className = "crumbsContainer">{crumbs}</div>

           </div>
        );
    }
}
export default CrumbContainer;