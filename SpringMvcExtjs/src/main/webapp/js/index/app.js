

//@require @packageOverrides
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
	autoCreateViewport: true,
    views: [ 'indexView' ],
    models:['menuModel',],
    stores:[ 'menuStore',],
    controllers: ['indexController' ],
    appFolder: 'js/index/app',
    name: 'index'
});
