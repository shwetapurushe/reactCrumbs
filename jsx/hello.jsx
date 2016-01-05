import React from 'react';
import Greeting from './greeting.jsx';

class Hello extends React.Component{
    render(){
        return(<div>
            <h1>Hello<Greeting surname = "Purushe"/></h1>
            </div>);
    }
}

export default Hello;