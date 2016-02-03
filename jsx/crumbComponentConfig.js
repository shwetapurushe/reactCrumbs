class CrumbComponentConfig{

    constructor (){
        //setting session state
        Object.defineProperties(this, {
            activeCrumbName : {
                value : Weave.linkableChild(this, new weavejs.core.LinkableString())
            },
            activeIndex : {
                value : Weave.linkableChild(this, new weavejs.core.LinkableNumber(0))
            }
        });
        this.activeNode = {
            value : null
        }

    }
}
Weave.registerClass('crumbs.CrumbComponentConfig', CrumbComponentConfig);
export default CrumbComponentConfig;







