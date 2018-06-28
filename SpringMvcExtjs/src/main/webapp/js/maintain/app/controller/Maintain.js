

Ext.define('MyApp.controller.Maintain', {
    extend: 'Ext.app.Controller',
    init: function(application) {
		this.control({ 
			'view1':{
    			afterrender:this.onRender
    		},		
            // 保存
            '#saveAndClose': {
            	click: this.onSave
            }
            
        }); 
    },
      onRender:function(me,e,eOpts){
		  var action = Ext.create('Ext.data.Store', {
			fields: ['action', 'text'],
			data : [
	        {"action":"NBYH", "text":"内部养护"},
	        {"action":"NBZY", "text":"内部占用"},
			]
			});
		Ext.getCmp('action').bindStore(action).setValue('NBYH');
		  
	  },   
    onSave: function(button, e, eopts) {
    	/* var form = Ext.getCmp('form');
    	if(!form.isValid()){
    		return;
    	}*/ 
        var cataId = Ext.getCmp('cataId').getValue().trim();
        if('' == cataId.trim()){
        	 Ext.Msg.show({
	                title: '提示信息',
	                icon: Ext.Msg.WARNING,
	                msg: '请选择要维护的项目',
	                buttons: Ext.Msg.OK
	            });
        } 
    }	
    	
});




