
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
	models: [
		'RoleModel',
		'MenuModel'
		],
    views: 	['MainView',
    	//'UserWin'
    	],
    stores: [
    	'RoleStore',
    	'MenuStore'
    	],
    appFolder: 'js/role_menu/app',
    controllers: ['RoleToMenuController'],
    autoCreateViewport: true,
    name: 'RoleToMenu'
});