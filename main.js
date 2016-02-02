/**
 * Created by Shweta on 1/5/2016.
 */
console.log("webpack works");
import ReactDOM from 'react-dom';
import Weave from 'Weave';
import CrumbComponent from './jsx/CrumbComponent.jsx';
import './css/style.css';

window.dashboard_weave = new Weave();//separate weave core for sessioning entire dashboard
//communicate between these two using path API
window.weave = new Weave();//viz weave

var busyStatus;
busyStatus = window.dashboard_weave.root.requestObject("isWeaveBusy", weavejs.core.LinkableBoolean, true);

loadWeaveFile("blah.weave");
//rendering the data crumbs


function loadWeaveFile (filename){
    //console.log("loading ", filename);
    busyStatus.value = true;//setting default value as false

    //loading the weave session state
    WeaveUI.loadLayout(weave, filename, "weaveElt", weaveReady );

};

//this callback runs when viz weave and sessions state loads
function weaveReady (){
    console.log("weave is ready");
    busyStatus.value = false;//once weave is ready set to true
    var tree = new weavejs.data.hierarchy.WeaveRootDataTreeNode(weave.root);//new tree for every new session state load

    //MAIN COMPONENT RENDER
    ReactDOM.render( <CrumbComponent tree = {tree}/>,document.getElementById("content"));
}
