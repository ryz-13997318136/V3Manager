
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
	models: ['RoleModel','UserModel'],
    views: 	['MainView',
    	//'UserWin'
    	],
    stores: ['RoleStore','UserStore'],
    appFolder: 'js/user_role/app',
    controllers: ['UserToRoleController'],
    autoCreateViewport: true,
    name: 'UserToRole'
});