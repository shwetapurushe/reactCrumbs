import Weave from 'Weave';

class CrumbContainerConfig {
    constructor (){
        Object.defineProperties(this, {
            crumbTrail : {
                value : Weave.linkableChild(this,  new weavejs.core.LinkableVariable(Array))
            }
        });
    }
}
Weave.registerClass('crumbs.CrumbContainerConfig', CrumbContainerConfig);
export default CrumbContainerConfig;

