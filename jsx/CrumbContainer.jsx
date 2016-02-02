import React from 'react';
import Crumb from './Crumb.jsx';

import CrumbComponentConfig from './CrumbComponentConfig.js';

class CrumbContainer extends React.Component{

    constructor (props){
        super(props);
    }

    handleCrumbClick (name, index){

    }

    componentDidMount (){

    }

    render (){

        var crumbsUI = this.props.crumbTrail.map(function(name, index){
            return(<Crumb key= {index} title = {name}/>);
        });

        return (
           <div>
               <div className = "crumbsContainer">{crumbsUI}</div>
           </div>
        );
    }
}
export default CrumbContainer;