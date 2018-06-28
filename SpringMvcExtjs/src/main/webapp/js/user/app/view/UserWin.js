Ext.define('User.view.UserWin', {
	extend: 'Ext.window.Window',
    id:'userWinId',
    
    title:'用户编辑',
    //closable:false,
    modal:true,
    layout: {
        type: 'fit'
    },
    height:230,
    width:500,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    id:'userForm',
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    bodyPadding: 10,
                    items: [
	                    	{
	                            xtype: 'textfield',
	                            name: 'id',
	                            fieldLabel: '用户ID',
	                            readOnly:true
	                        },
                        	{
                                xtype: 'textfield',
                                name: 'name',
                                fieldLabel: '用户名称',
                                allowBlank: false  
                            }, 
                            {
                                xtype: 'textfield',
                                name: 'password',
                                fieldLabel: '用户密码',
                                //inputType: 'password',
                            },
                            {
                            	 xtype: 'button',
                            	 id:"saveUserButton",
                                 text : '保 存'
                            },
                    ]
                
                }
            ]
        });

        me.callParent(arguments);
    }

});