var theRecord = null;
Ext.define('Menu.controller.MenuController', {
    extend: 'Ext.app.Controller',

    init: function(application) {
    	this.control({
    		'mainview': {
    			afterrender: this.MainViewRander
    		},
    		 '#menuTree':{
    			 itemcontextmenu:this.TreeMenu,
     	    },
     	    '#saveMenuButton':{
     	    	click:this.saveMenubuttonClick
     	    }
    		
    	});
    },
    saveMenubuttonClick:function(){
    	var menuForm = Ext.getCmp('menuForm').getForm();
    	var menu = menuForm.getValues();
    	var transferObj=this.createObjectData('Menu.model.MenuModel',menu);
    	Ext.MessageBox.show({
            title: '请稍等',
            msg: '<div style="float:left;margin-top:10px;">  正在保存...<br />',
            width:240,
            progress:false,
            closable:false
        });    
    	Ext.Ajax.request({
            url: 'menu/addMenu',
            headers: {accept: 'application/json'},
            jsonData : transferObj,
            method: 'POST',
            waitMsg: '加载中...',
            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                Ext.MessageBox.hide();
                if(obj.result == 'SUCCESS') {
                	Ext.getStore('MenuStore').load();
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
	    Ext.getStore('MenuStore').load();
    },
  
    TreeMenu:function (me, record, item,index,e,  eOpts ){
    	var _this = this;
        e.preventDefault();
        theRecord = record;
        var menus = new Ext.menu.Menu({
		items : [
					{
						text : "新增",
						iconCls:'active',
						pressed : true,
						handler : function() {
							Ext.create('Menu.view.MenuWin').show();
							var form = Ext.getCmp('menuForm').getForm();
							form.findField('parentId').setValue(theRecord.data.id);
							
						}
					},
					{
						text : "修改",
						iconCls:'active',
						pressed : true,
						handler : function() {
							Ext.create('Menu.view.MenuWin').show();
							theRecord.data.name = theRecord.data.text;
							Ext.getCmp('menuForm').getForm().setValues(theRecord.data);
						}
					},
					{
						text : "删除",
						iconCls:'active',
						pressed : true,
						handler : function() {
							_this.deleteMenu(theRecord.data.id);
						}
					},
				]
        });
        if(record.data.leaf){
        	menus.items.items.splice(0,1);
        }
        menus.showAt(e.getXY());
    },
    deleteMenu:function(menuId){
    	Ext.MessageBox.show({
            title: '请稍等',
            msg: '<div style="float:left;margin-top:10px;">  正在保存...<br />',
            width:240,
            progress:false,
            closable:false
        });    
    	Ext.Ajax.request({
            url: 'menu/deleteMenu',
            headers: {accept: 'application/json'},
            params: {
            	menuId: menuId
            },
            method: 'POST',
            waitMsg: '加载中...',
            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                Ext.MessageBox.hide();
                if(obj.result == 'SUCCESS') {
                	Ext.getStore('MenuStore').load();
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
