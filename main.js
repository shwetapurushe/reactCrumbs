/**
 * Created by Shweta on 1/5/2016.
 */
console.log("webpack works");
import ReactDOM from 'react-dom';
import './css/style.css';

//import Hello from './jsx/hello.jsx';
//
//ReactDOM.render(<Hello/>, document.getElementById("content"));

import CrumbContainer from './jsx/CrumbContainer';

ReactDOM.render(<CrumbContainer/>, document.getElementById("content"));
