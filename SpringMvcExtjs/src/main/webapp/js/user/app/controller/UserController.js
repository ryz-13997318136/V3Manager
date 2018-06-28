var theRecord = null;
Ext.define('User.controller.UserController', {
    extend: 'Ext.app.Controller',

    init: function(application) {
    	this.control({
    		'mainview': {
    			afterrender: this.MainViewRander
    		},
    		 '#userGrid':{
     	    	cellcontextmenu:this.itemCellContextMenu,
     	    	containercontextmenu:this.itemMenu
     	    },
     	    '#saveUserButton':{
     	    	click:this.saveUserbuttonClick
     	    }
    		
    	});
    },
    saveUserbuttonClick:function(){
    	var userForm = Ext.getCmp('userForm').getForm();
    	var user = userForm.getValues();
    	var transferObj=this.createObjectData('User.model.UserModel',user);
    	Ext.MessageBox.show({
            title: '请稍等',
            msg: '<div style="float:left;margin-top:10px;">  正在保存...<br />',
            width:240,
            progress:false,
            closable:false
        });    
    	Ext.Ajax.request({
            url: 'user/addUser',
            headers: {accept: 'application/json'},
            jsonData : transferObj,
            method: 'POST',
            waitMsg: '加载中...',
            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                Ext.MessageBox.hide();
                if(obj.result == 'SUCCESS') {
                	Ext.getStore('UserStore').load();
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
	    Ext.getStore('UserStore').load();
    },
    itemCellContextMenu:function( me, td, cellIndex, record, tr, rowIndex, e, eOpts ){
    	this.itemMenu( me, e, record);
    },
    itemMenu:function ( me, e, record){
    	var _this = this;
    	theRecord = record;
        e.preventDefault();
        var menus = new Ext.menu.Menu({
		items : [
					{
						text : "新增",
						iconCls:'active',
						pressed : true,
						handler : function() {
							Ext.create('User.view.UserWin').show();
						}
					},
					{
						text : "修改",
						iconCls:'active',
						pressed : true,
						handler : function() {
							Ext.create('User.view.UserWin').show();
							Ext.getCmp('userForm').getForm().setValues(theRecord.data);
						}
					},
					{
						text : "删除",
						iconCls:'active',
						pressed : true,
						handler : function() {
							_this.deleteUser(theRecord.data.id);
						}
					},
				]
        });
        if(record == null){
        	menus.items.items.splice(1,2)
        }
        menus.showAt(e.getXY());
    },
    deleteUser:function(userId){
    	Ext.MessageBox.show({
            title: '请稍等',
            msg: '<div style="float:left;margin-top:10px;">  正在保存...<br />',
            width:240,
            progress:false,
            closable:false
        });    
    	Ext.Ajax.request({
            url: 'user/deleteUser',
            headers: {accept: 'application/json'},
            params: {
            	userId: userId
            },
            method: 'POST',
            waitMsg: '加载中...',
            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                Ext.MessageBox.hide();
                if(obj.result == 'SUCCESS') {
                	Ext.getStore('UserStore').load();
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
    createObjectData:function(modelId,data){
    	var arr=Ext.clone(data);
    	
    	var model=Ext.ModelManager.getModel(modelId);
    	var fields=model.getFields();
    	var id;
    	for(var sourceName in fields){
    		var mapping=fields[sourceName].mapping;
    		var name=fields[sourceName].name;
    		if(mapping!=''&&mapping!=null){
    			if(mapping.substring(0,3)=='id.'){
    				if(!(id instanceof Object)) id={};				
    				id[name]='';
    			}else{
    				delete arr[name];
    			}
    		}		
    	}
    	
    	if(id instanceof Object){
    		for(i in id){
    			id[i]=arr[i];
    			delete arr[i];
    		}
    	}
    	
    	var returnObj={};
    	if(id instanceof Object) returnObj['id']=id;
    	for(i in arr){
    		returnObj[i]=arr[i];
    	}

        return returnObj;
    }
});
