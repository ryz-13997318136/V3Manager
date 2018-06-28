Ext.define('Menu.store.MenuStore', {
	 extend: 'Ext.data.TreeStore',

    requires: [
        'Menu.model.MenuModel'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'Menu.model.MenuModel',
            storeId: 'menuStoreId',
            defaultRootText: '所有菜单',
            nodeParam: 'parentId',
            defaultRootId:'0',  // 默认跟节点的ID，第一次加载时时parentId的值
            proxy: {
                type: 'ajax',
                url: 'menu/loadAllMenu',
                reader: {
                    type: 'json',
                    root: 'menu'
                }
            }
        }, cfg)]);
    }
});