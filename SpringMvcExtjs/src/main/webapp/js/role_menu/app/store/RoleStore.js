Ext.define('RoleToMenu.store.RoleStore', {
    extend: 'Ext.data.Store',

    requires: [
        'RoleToMenu.model.RoleModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'RoleToMenu.model.RoleModel',
            storeId: 'roleStoreId',
            proxy: {
                type: 'ajax',
                url : 'role/loadAllRole',
                reader: {
                    type: 'json',
                    root: 'roles'
                }
            }
        }, cfg)]);
    }
});