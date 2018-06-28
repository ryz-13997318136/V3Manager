Ext.define('UserToRole.store.UserStore', {
    extend: 'Ext.data.Store',

    requires: [
        'UserToRole.model.UserModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'UserToRole.model.UserModel',
            storeId: 'userStoreId',
            proxy: {
                type: 'ajax',
                url : 'user/loadUserByKey',
                reader: {
                    type: 'json',
                    root: 'Users'
                }
            }
        }, cfg)]);
    }
});