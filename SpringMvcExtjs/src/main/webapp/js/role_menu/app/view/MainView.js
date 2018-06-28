

Ext.define('RoleToMenu.view.MainView', {
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
                                   xtype: 'gridpanel',
                                   id:'roleGrid',
                                   flex: 1,
                                   height: 700,
                                   title: '角色列表',
                                   store:'RoleStore',
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
                                   
                               
      	                        },
      	                        {
      	                    		xtype: 'treepanel',
      	                    		id:'menuTree',
      	                            collapsible: true,
      	                            title: '菜单树',
      	                            height: 700,
      	                            flex: 2,
      	                            store: 'MenuStore',
      	                            rootVisible: true,
      	                            columns: [
      		          	                  {
      		          	                	  xtype: 'treecolumn',
      		          	                	  dataIndex: 'text',
      		          	                	  width: 150,
      		          	                	  text:'text'
      		          	                  },
      		          	                  {
      		          	                	  xtype: 'gridcolumn',
      		          	                	  dataIndex: 'parentId',
      		          	                	  text:'parentId'
      		          	                  },
      		          	                  {
      		          	                	  xtype: 'gridcolumn',
      		          	                	  dataIndex: 'url',
      		          	                	  text:'url'
      		          	                  },
      		          	                  {
      		          	                	  xtype: 'gridcolumn',
      		          	                	  dataIndex: 'index1',
      		          	                	  text:'index1'
      		          	                  }
      	          	                  ]
      	          	           
      	            				
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