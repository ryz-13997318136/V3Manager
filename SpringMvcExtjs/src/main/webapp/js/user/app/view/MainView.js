

Ext.define('User.view.MainView', {
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
                            xtype: 'gridpanel',
                            id:'userGrid',
                            flex: 1,
                            height: 695,
                            title: '用户列表',
                            store:'UserStore',
                            columns: [
								{
								    xtype: 'gridcolumn',
								    //hidden: true,
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
                            selModel: Ext.create('Ext.selection.CheckboxModel', {

                            })
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});