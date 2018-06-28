Ext.define('Role.store.RoleStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Role.model.RoleModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'Role.model.RoleModel',
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