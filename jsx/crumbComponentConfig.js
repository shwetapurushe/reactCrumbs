import CrumbContainerConfig from './CrumbContainerConfig';

class CrumbComponentConfig{

    constructor (){
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
}
Weave.registerClass('crumbs.CrumbComponentConfig', CrumbComponentConfig);
export default CrumbComponentConfig;







