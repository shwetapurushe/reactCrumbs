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

loadWeaveFile("ELM_Indicators_Dashboard.weave");

function loadWeaveFile (filename){
    busyStatus.value = true;//setting default value as false
    //loading the weave session state
    WeaveUI.loadLayout(weave, filename, "weaveElt", weaveReady );
};

function fetchTree (){
    var tree;
    //WEAVE TREE
    //tree = new weavejs.data.hierarchy.WeaveRootDataTreeNode(weave.root);//new tree for every new session state load
    //ReactDOM.render( <CrumbComponent label = "getLabel" children = "getChildren" tree = {tree}/>,document.getElementById("content"));

    //CUSTOM TREE
    loadJSON(function(response){
        tree = JSON.parse(response);
        //MAIN COMPONENT RENDER
        //ReactDOM.render( <CrumbComponent label = "name" children = "children" tree = {tree}/>,document.getElementById("content"));
    });
}


//this callback runs when viz weave and sessions state loads
function weaveReady (){
    console.log("weave is ready");
    busyStatus.value = false;//once weave is ready set to true

   //fetchTree();
}

//TODO move to a utility module later
// reference http://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './lib/Navigation.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}