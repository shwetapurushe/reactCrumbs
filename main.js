/**
 * Created by Shweta on 1/5/2016.
 */
console.log("webpack works");
import ReactDOM from 'react-dom';
import './css/style.css';

import CrumbContainer from './jsx/CrumbContainer';

ReactDOM.render(<CrumbContainer/>, document.getElementById("content"));
