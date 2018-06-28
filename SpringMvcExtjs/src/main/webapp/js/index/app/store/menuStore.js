

Ext.define('index.store.menuStore', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'index.model.menuModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'index.model.menuModel',
            storeId: 'BGStoreId',
            defaultRootText: '所有菜单',
            nodeParam: 'parentId',
            proxy: {
                type: 'ajax',
                url: 'menu/loadMenuByUserId',
                reader: {
                    type: 'json',
                    root: 'menu'
                }
            }
        }, cfg)]);
    }
});