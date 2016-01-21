import React from 'react';
import Crumb from './Crumb.jsx';

import CrumbComponentConfig from './crumbComponentConfig.js';

class CrumbContainer extends React.Component{

    constructor (props){
        super(props);
    }

    render (){
        var crumbs = this.props.crumbTrail;
        console.log("CrumbContainer contains", crumbs);
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