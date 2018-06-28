

Ext.define('Role.view.MainView', {
    extend: 'Ext.container.Viewport',
	 alias: 'widget.mainview',
    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    id:'form',
                    items: [
                       {
                    	   xtype: 'container',
                           margins: '5',
                           layout: {
                               align: 'stretch',
                               type: 'vbox'
                           },
                           items:[
                        	   {
                        		   xtype: 'form',
                                   layout: {
                                       align: 'stretch',
                                       type: 'vbox'
                                   },
                                   id:'roleForm',
                                   dockedItems: [
                                       {
                                           xtype: 'toolbar',
                                           flex: 1,
                                           dock: 'top',
                                           items: [
                                                   {
                                                       xtype: 'label',
                                                       id: 'label',
                                                       text: '当前功能：角色维护 '
                                                   },
                                                   {
                                                       xtype: 'button',
                                                       id: 'saveRole',
                                                       text: '保存角色',
                                                   },
                                                   {
                                                       xtype: 'button',
                                                       id: 'cleanRole',
                                                       text: '清 空'
                                                   }
                                           ]
                                       }
                                   ],
                                   items: [
                                	   {
           	                            xtype: 'textfield',
           	                            name: 'id',
           	                            fieldLabel: '角色ID',
           	                            margins: '5 5 0 5',
           	                        },
           	                        {
           	                            xtype: 'textfield',
           	                            name: 'name',
           	                            fieldLabel: '角色名称', 
           	                            margins: '0 5 0 5',
           	                        }
                                   ]
                        	   }
                           ]
                       },
                        {
                            xtype: 'gridpanel',
                            id:'roleGrid',
                            flex: 1,
                            height: 695,
                            title: '角色列表',
                            store:'RoleStore',
                            tbar: [
                            	  { xtype: 'button', text: '删除角色',id:'deleteRole' }
                            	],
                            columns: [
								{
								    xtype: 'gridcolumn',
								    dataIndex: 'id',
								    text: '角色id'
								},
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'name',
                                    text: '角色名称'
                                }
                                
                            ],
                            
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});