

import CrumbContainerConfig from './CrumbContainerConfig';

(function(module){
    function CrumbComponentConfig (){
        //setting session state
        Object.defineProperties(this, {
            crumbContainer : {
                value : Weave.linkableChild(this, new CrumbContainerConfig())
            },
            activeCrumb : {
                value : Weave.linkableChild(this, new weavejs.core.LinkableString())
            },
            activeIndex : {
                value : Weave.linkableChild(this, new weavejs.core.LinkableNumber(0))
            }
        });

    }

    module.exports = CrumbComponentConfig;
    Weave.registerClass('crumbs.CrumbComponentConfig', CrumbComponentConfig);

}(module));




