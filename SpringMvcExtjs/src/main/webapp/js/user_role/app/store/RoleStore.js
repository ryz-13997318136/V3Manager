Ext.define('UserToRole.store.RoleStore', {
    extend: 'Ext.data.Store',

    requires: [
        'UserToRole.model.RoleModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'UserToRole.model.RoleModel',
            storeId: 'roleStoreId',
            proxy: {
                type: 'ajax',
                url : 'role/loadRoleByUserId',
                reader: {
                    type: 'json',
                    root: 'roles'
                }
            }
        }, cfg)]);
    }
});