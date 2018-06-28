
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
	models: ['RoleModel'],
    views: 	['MainView',
    	//'UserWin'
    	],
    stores: ['RoleStore'],
    appFolder: 'js/role/app',
    controllers: ['RoleController'],
    autoCreateViewport: true,
    name: 'Role'
});