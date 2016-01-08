import React from 'react';
import Crumb from './Crumb.jsx'

class CrumbContainer extends React.Component{

    render (){

        var crumbs = [];

        for(var i = 0; i < 3; i++) {
            crumbs.push(<Crumb/>);
        }

        return (
            <div className = "crumbsContainer">
                {crumbs}
            </div>
        );
    }
}

export default CrumbContainer;