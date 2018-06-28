

Ext.define('UserToRole.view.MainView', {
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
                               type: 'hbox'
                           },
                           items:[
                        	   
                        	   {
      	                            xtype: 'textfield',
      	                            id: 'keyword',
      	                            fieldLabel: '人员名称',
      	                            margins: '5 5 0 5',
      	                        },
      	                        {
                                    xtype: 'button',
                                    id: 'queryUser',
                                    margins: '5 5 0 5',
                                    text: '查询',
                                }
                           ]
                       },
                       
                       {
                    	   xtype: 'container',
                           margins: '5',
                           layout: {
                               align: 'stretch',
                               type: 'hbox'
                           },
                           items:[
                        	   {
                                   xtype: 'gridpanel',
                                   id:'userGrid',
                                   flex: 1,
                                   height: 695,
                                   title: '查询结果',
                                   store:'UserStore',
                                   columns: [
       								{
       								    xtype: 'gridcolumn',
       								    dataIndex: 'id',
       								    text: '用户id'
       								},
                                       {
                                           xtype: 'gridcolumn',
                                           dataIndex: 'name',
                                           text: '名称'
                                       },
                                       {
                                           xtype: 'gridcolumn',
                                           dataIndex: 'password',
                                           text: '密码'
                                       }
                                   ],
                                   
                               
      	                        },
      	                        {

      	                            xtype: 'gridpanel',
      	                            id:'roleGrid',
      	                            flex: 1,
      	                            height: 695,
      	                            title: '关联角色',
      	                            store:'RoleStore',
      	                            selModel: Ext.create('Ext.selection.CheckboxModel', {
      	                            	 mode : 'SIMPLE', // 可以多选
      	                            	 id:'roleCheckboxModel',
      	                            	
      	                            }),
      	                          tbar: [
      	                        	  { xtype: 'button', text: '保存关联',id:'saveUserToRole' }
      	                        	],
      	                            columns: [
      	                            	/*{
      	                            		xtype: 'checkcolumn',
      									    dataIndex: 'checked',
      									    text: '角色id'
      	                            	},*/
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
                       
                       },
                       
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});