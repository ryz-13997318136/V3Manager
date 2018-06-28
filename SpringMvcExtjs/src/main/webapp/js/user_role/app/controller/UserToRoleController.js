var theRecord = null;
Ext.define('UserToRole.controller.UserToRoleController', {
    extend: 'Ext.app.Controller',

    init: function(application) {
    	this.control({
    		'mainview': {
    			afterrender: this.MainViewRander
    		},
    		 '#userGrid':{
    			 itemclick:this.UserGridItemClick,
     	    },
     	    '#queryUser':{
     	    	click:this.queryUserbuttonClick
     	    },
     	    '#saveUserToRole':{
     	    	click:this.saveUserToRoleClick
     	    }
    		
    	});
    },
    queryUserbuttonClick:function(){
    	var keyword = Ext.getCmp('keyword').getValue();
    	var userStore = Ext.getStore('UserStore');
    	userStore.getProxy().setExtraParam('keyword',keyword);
    	userStore.load();
    },
    // 表单界面一初始化
    MainViewRander: function(comp, eOpts) {
    	var grid = Ext.getCmp('roleGrid');
        var selModel = grid.getSelectionModel();
    	var roleStore = Ext.getStore('RoleStore');
    	roleStore.addListener({
    		load: function (me, records, success, opts) {
    			if (!success || !records || records.length == 0){return;}
		        records.forEach(function(item){
			        	if(item.data.checked == true){
			        		selModel.select(item, true, true); // 不会触发选择事件
			        	}
		        })
	        }
    	})
    },
    UserGridItemClick:function( me, record, item, index,  e, eOpts ){
    	 var RoleStore = Ext.getStore('RoleStore');
    	 RoleStore.removeAll();
    	 RoleStore.getProxy().setExtraParam('userId',record.data.id);
    	 RoleStore.load();
    },
    saveUserToRoleClick:function(){
    	var userId = Ext.getCmp('userGrid').getSelectionModel().selected.items[0].data.id;
    	var sm = Ext.getCmp('roleGrid').getSelectionModel();
    	var items = sm.selected.items;
    	var roleIds = new Array();
    	items.forEach(function(item){
    		roleIds.push(item.data.id);
    	})
    	console.log(roleIds);
    	if(roleIds.length == 0){
    		roleIds.push(77);
    	}
    	Ext.MessageBox.show({
            title: '请稍等',
            msg: '<div style="float:left;margin-top:10px;">  正在保存...<br />',
            width:240,
            progress:false,
            closable:false
        });    
    	Ext.Ajax.request({
            url: 'role/userRelationRole',
            headers: {accept: 'application/json'},
            params: {
            	userId: userId,
            	roleIds: roleIds
            },
            method: 'POST',
            waitMsg: '加载中...',
            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                Ext.MessageBox.hide();
                if(obj.result == 'SUCCESS') {
                	Ext.getStore('RoleStore').load();
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
});
