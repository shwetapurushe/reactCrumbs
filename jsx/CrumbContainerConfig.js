
import Weave from 'Weave';
(function(module){

    function CrumbContainerConfig (){
        Object.defineProperties(this, {
            crumbTrail : {
                value : Weave.linkableChild(this,  new weavejs.core.LinkableVariable(Array))
            }
        });
    }

    module.exports = CrumbContainerConfig;
    Weave.registerClass('crumbs.CrumbContainerConfig', CrumbContainerConfig);

}(module));
