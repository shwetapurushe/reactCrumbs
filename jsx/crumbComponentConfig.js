/**
 * Created by Shweta on 1/14/2016.
 */
import Weave from 'Weave';
(function(module){

    function CrumbComponentConfig (){
        //setting session state
        Object.defineProperties(this, {
            crumbTrail : {
                value : Weave.linkableChild(this,  new weavejs.core.LinkableVariable(Array))
            }
        });
    }

    module.exports = CrumbComponentConfig;
    Weave.registerClass('crumbs.CrumbComponentConfig', CrumbComponentConfig);
})(module);