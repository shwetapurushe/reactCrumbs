/**
 * Created by Shweta on 1/5/2016.
 */
console.log("webpack works");
import ReactDOM from 'react-dom';
import Weave from 'Weave';
import './css/style.css';

import CrumbContainer from './jsx/CrumbContainer';
import CrumbComponentConfig from './jsx/crumbComponentConfig';

var busyStatus;
exports.CrumbConfig = CrumbComponentConfig;
window.dashboard_weave = new Weave();//separate weave core for sessioning entire dashboard
console.log("dashboard weave",window.dashboard_weave);
busyStatus = window.dashboard_weave.root.requestObject("isWeaveBusy", weavejs.core.LinkableBoolean, true);
//communicate between these two using path API
window.weave = new Weave();//viz weave

loadWeaveFile("KSA.weave");
//rendering the data crumbs
ReactDOM.render(<CrumbContainer/>, document.getElementById("content"));


function loadWeaveFile (filename){
    //console.log("loading ", filename);
    busyStatus.value = true;//setting default value as false

    //loading the weave session state
    WeaveUI.loadLayout(weave, filename, "weaveElt", weaveReady );

};

//this callback runs when viz weave and sessions state loads
function weaveReady (){
    //console.log("weave is ready");
    busyStatus.value = false;//once weave is ready set to true
    console.log("dashboard weave2",window.dashboard_weave);
}
