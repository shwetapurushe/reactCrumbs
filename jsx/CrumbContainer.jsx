import React from 'react';
import Crumb from './Crumb.jsx';
import CrumbOptionsList from './crumbOptionsList.jsx';

class CrumbContainer extends React.Component{

    render (){

        var crumbs = [];
        var dd= ["bluewhat", "blue", "qu", "aa", "anbalagan"];
        //console.log("in crumb continer");
        for(var i = 0; i < 3; i++) {
            crumbs.push(<Crumb/>);
        }

        return (
           <div>
               <div className = "crumbsContainer">{crumbs}</div>

                <CrumbOptionsList options = {dd}/>
           </div>
        );
    }
}

export default CrumbContainer;