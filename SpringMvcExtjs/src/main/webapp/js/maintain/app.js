
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
	models: [
	         'Maintain'
	     ],
    views: [
        'Maintain'
    ],
    stores: [
             'Maintain'
         ],
         appFolder: 'js/maintain/app',
    autoCreateViewport: true,
    controllers: [
        'Maintain'
    ],
    name: 'MyApp'
});
