Ext.define('Menu.view.MenuWin', {
	extend: 'Ext.window.Window',
    id:'userWinId',
    
    title:'菜单编辑',
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
                    id:'menuForm',
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    bodyPadding: 10,
                    items: [
	                    	{
	                            xtype: 'textfield',
	                            name: 'id',
	                            fieldLabel: '菜单ID',
	                            readOnly:true
	                        },
	                        {
	                            xtype: 'textfield',
	                            name: 'index1',
	                            fieldLabel: '菜单索引'
	                        },
                        	{
                                xtype: 'textfield',
                                name: 'name',
                                fieldLabel: '菜单名称',
                                allowBlank: false  
                            }, 
                            {
                                xtype: 'textfield',
                                name: 'parentId',
                                fieldLabel: '菜单父ID',
                                allowBlank: false  
                            }, 
                            {
                            	 xtype: 'textfield',
                                 name: 'url',
                                 fieldLabel: '菜单URL',
                                 allowBlank: false  
                            },
                            {
                            	 xtype: 'button',
                            	 id:"saveMenuButton",
                                 text : '保 存'
                            },
                    ]
                
                }
            ]
        });

        me.callParent(arguments);
    }

});