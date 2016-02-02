import React from 'react';

import CrumbContainer from './CrumbContainer';
import CrumbComponentConfig from './CrumbComponentConfig';
import CrumbOptionsList from './crumbOptionsList.jsx';


class CrumbComponent extends React.Component{

    constructor (props){
        super(props);

    }



    //REACT LIFECYCLE METHODS
    componentDidMount (){

    }

    componentWillUnmount (){

    }

    render (){

           return (
            <div>
                <CrumbContainer/>
                <CrumbOptionsList/>
            </div>
        );
    }
}

export default CrumbComponent;