

Ext.define('MyApp.store.Maintain', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Maintain'
    ],
    groupField:'projectName',
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'MyApp.model.Maintain',
            storeId: 'Maintain',
            proxy: {
            	type : 'memory',
				reader : {
					type : 'json'
				}
            }
        }, cfg)]);
    }
});