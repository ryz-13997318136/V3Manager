

Ext.define('index.view.indexView', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.indexView',
    id:'notice',
    layout: {
        type: 'fit'
    },
    closable: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    id: 'noticeForm',
                    layout: 'border',
                    width: 1600,
                    height: 600,
                    items: [
                    	{
                    		xtype: 'panel',
                    		region: 'north', 
        				    html: '<p>当前登录人：'+_gg._cuserName+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=loginOut>退出</a></p>'
                    	},
                    	{
                    		xtype: 'treepanel',
                    		id:'menuTree',
                    		region: 'west', 
                            collapsible: true,
                            title: '菜单树',
                            width: 400,
                            store: 'menuStore',
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
          	           
            				
                    	},
                    	{
                    		xtype: 'tabpanel',
                    		 region: 'center', 
                    		 id:'mainPanle',
         	                title: '业务面板',
         	                bodyPadding: 10,             
         					layout: 'fit',
                    	}
                	],
                    
                   
                }
            ]
        });

        me.callParent(arguments);
    }

});