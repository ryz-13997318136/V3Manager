
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
	models: ['MenuModel'],
    views: 	['MainView','MenuWin'],
    stores: ['MenuStore'],
    appFolder: 'js/menu/app',
    controllers: ['MenuController'],
    autoCreateViewport: true,
    name: 'Menu'
});