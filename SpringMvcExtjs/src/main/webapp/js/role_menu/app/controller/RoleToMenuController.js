var theRecord = null;
Ext.define('RoleToMenu.controller.RoleToMenuController', {
    extend: 'Ext.app.Controller',

    init: function(application) {
    	this.control({
    		'mainview': {
    			afterrender: this.MainViewRander
    		},
    		 '#roleGrid':{
    			 itemclick:this.RoleGridItemClick,
     	    },
     	   '#menuTree':{
  			 checkchange:this.MenuTreeItemChecked
   	    },
    		
    	});
    },
   
    MenuTreeItemChecked:function(node,checked,opt){
    	
    	var roleId = Ext.getCmp('roleGrid').getSelectionModel().selected.items[0].data.id;
    	var menuId = node.data.id;
    	Ext.MessageBox.show({
            title: '请稍等',
            msg: '<div style="float:left;margin-top:10px;">  正在保存...<br />',
            width:240,
            progress:false,
            closable:false
        });    
    	Ext.Ajax.request({
            url: 'role/roleRelationMenu',
            headers: {accept: 'application/json'},
            params: {
            	roleId: roleId,
            	menuId: menuId,
            	checked:checked
            },
            method: 'POST',
            waitMsg: '加载中...',
            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                Ext.MessageBox.hide();
                if(obj.result == 'SUCCESS') {
                	Ext.getStore('MenuStore').reload();
                } 
                Ext.Msg.show({
                    title: '提示信息',
                    icon: Ext.Msg.WARNING,
                    msg: obj.message,
                    buttons: Ext.Msg.OK
                });
                
            },
            failure: function(response, opts) {
                Ext.MessageBox.hide();
                Ext.Msg.show({
                    title: '提示',
                    msg: '网络连接失败',
                    buttons: Ext.Msg.OK
                });
            }
        });
    	
    },
    // 表单界面一初始化
    MainViewRander: function(comp, eOpts) {
    	var roleStore = Ext.getStore('RoleStore');
    	roleStore.load();
    	
    },
    RoleGridItemClick:function( me, record, item, index,  e, eOpts ){
    	 var MenuStore = Ext.getStore('MenuStore');
    	 //MenuStore.removeAll();
    	 MenuStore.getProxy().setExtraParam('roleId',record.data.id);
    	 MenuStore.load();
    },
});
