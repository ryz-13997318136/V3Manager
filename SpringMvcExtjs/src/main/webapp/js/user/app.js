
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
	models: ['UserModel'],
    views: 	['MainView','UserWin'],
    stores: ['UserStore'],
    appFolder: 'js/user/app',
    controllers: ['UserController'],
    autoCreateViewport: true,
    name: 'User'
});