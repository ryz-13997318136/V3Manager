Ext.define('RoleToMenu.store.MenuStore', {
	 extend: 'Ext.data.TreeStore',

    requires: [
        'RoleToMenu.model.MenuModel'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'RoleToMenu.model.MenuModel',
            storeId: 'menuStoreId',
            defaultRootText: '所有菜单',
            nodeParam: 'parentId',
            defaultRootId:'0',  // 默认跟节点的ID，第一次加载时时parentId的值
            proxy: {
                type: 'ajax',
                url: 'menu/loadAllMenuByRole',
                reader: {
                    type: 'json',
                    root: 'menu'
                }
            }
        }, cfg)]);
    }
});