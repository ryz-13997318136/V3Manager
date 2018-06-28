var theRecord = null;
Ext.define('Role.controller.RoleController', {
    extend: 'Ext.app.Controller',

    init: function(application) {
    	this.control({
    		'mainview': {
    			afterrender: this.MainViewRander
    		},
    		 '#roleGrid':{
    			 itemdblclick:this.RoleGridItemdblClick,
     	    },
     	    '#saveRole':{
     	    	click:this.saveRolebuttonClick
     	    },
     	    '#cleanRole':{
     	    	click:this.cleanRolebuttonClick
     	    },
     	    '#deleteRole':{
     	    	click:this.deleteRolebuttonClick
     	    }
    		
    	});
    },
    saveRolebuttonClick:function(){
    	var roleForm = Ext.getCmp('roleForm').getForm();
    	var role = roleForm.getValues();
    	var transferObj=this.createObjectData('Role.model.RoleModel',role);
    	Ext.MessageBox.show({
            title: '请稍等',
            msg: '<div style="float:left;margin-top:10px;">  正在保存...<br />',
            width:240,
            progress:false,
            closable:false
        });    
    	Ext.Ajax.request({
            url: 'role/addRole',
            headers: {accept: 'application/json'},
            jsonData : transferObj,
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
    // 表单界面一初始化
    MainViewRander: function(comp, eOpts) {
	    Ext.getStore('RoleStore').load();
    },
    RoleGridItemdblClick:function( me, record, item, index,  e, eOpts ){
    	 Ext.getCmp('roleForm').getForm().setValues(record.data);
    },
    cleanRolebuttonClick:function(){
    	Ext.getCmp('roleForm').getForm().reset();
    },
    deleteRolebuttonClick:function(){
    	var roleId = '';
    	var sm = Ext.getCmp('roleGrid').getSelectionModel();
    	var items = sm.selected.items;
    	if(items.length == 0){
    		Ext.Msg.show({
                title: '提示信息',
                icon: Ext.Msg.WARNING,
                msg: '请选择数据',
                buttons: Ext.Msg.OK
            });
    		return ;
    	}
    	var roleId = items[0].data.id;
    	Ext.MessageBox.show({
            title: '请稍等',
            msg: '<div style="float:left;margin-top:10px;">  正在保存...<br />',
            width:240,
            progress:false,
            closable:false
        });    
    	Ext.Ajax.request({
            url: 'role/deleteRole',
            headers: {accept: 'application/json'},
            params: {
            	roleId: roleId
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
