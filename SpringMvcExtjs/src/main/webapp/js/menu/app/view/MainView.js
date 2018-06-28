

Ext.define('Menu.view.MainView', {
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
                    		xtype: 'treepanel',
                    		id:'menuTree',
                            collapsible: true,
                            title: '菜单树',
                            height:700,
                            width: 400,
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
                }
            ]
        });

        me.callParent(arguments);
    }

});