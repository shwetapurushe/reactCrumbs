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

        return (
           <div>
               <div className = "crumbsContainer"></div>
           </div>
        );
    }
}
export default CrumbContainer;