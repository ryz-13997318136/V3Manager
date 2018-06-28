
Ext.define('index.controller.indexController', {
    extend: 'Ext.app.Controller',

    init: function(application) {
    	this.control({
    		'indexView': {
    			afterrender: this.NoticeViewRander
    		},
    		'#menuTree':{
	        	itemclick: this.onBGGridClick
	        }
    	});
    },
    onBGGridClick:function(me, record){
    	if(record.data.leaf){
    		var main = Ext.getCmp('mainPanle');
    		var panel = main.getComponent(record.data.url);
    		if(panel==undefined){
    			var html = '<iframe scrolling="auto" frameborder="0" width="100%" height="100%" src="app.jsp?modules='+record.data.url+'"> </iframe>';
        		panel = new Ext.panel.Panel({
        			html: html,
    				title: record.data.text,
    				closable : true,
    				id:record.data.url
        		});
        		main.add(panel);
    		}
    		main.setActiveTab(panel);
    		
    	}
    },
    // 表单界面一初始化
    NoticeViewRander: function(comp, eOpts) {
    		Ext.getStore('menuStore').getProxy().setExtraParam('userId',_gg._cuserId);
    	    Ext.getStore('menuStore').load();
    },

});
