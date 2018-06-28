Ext.define('User.store.UserStore', {
    extend: 'Ext.data.Store',

    requires: [
        'User.model.UserModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'User.model.UserModel',
            storeId: 'userStoreId',
            proxy: {
                type: 'ajax',
                url : 'user/loadAllUser',
                reader: {
                    type: 'json',
                    root: 'Users'
                }
            }
        }, cfg)]);
    }
});