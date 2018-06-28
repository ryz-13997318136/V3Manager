

Ext.define('MyApp.view.Maintain', {
    extend: 'Ext.container.Viewport',
	 alias: 'widget.view1',
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
                    bodyPadding: 10,
                    title: '场馆维护',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            flex: 1,
                            dock: 'top',
                            items: [
                                    {
                                        xtype: 'label',
                                        id: 'label',
                                        text: '当前功能：场馆维护 '
                                    },
                                    {
                                        xtype: 'button',
                                        id: 'saveAndClose',
                                        iconCls: 'saveclose',
                                        text: '确认录入',
                                        operType: 'create'
                                    },
                                    {
                                        xtype: 'button',
                                        id: 'close',
                                        iconCls: 'close',
                                        text: '关 闭'
                                    }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'container',
                            margins: '5',
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    fieldLabel: '请选择要维护的项目',
                                    allowBlank: false,
                                   
                                    labelAlign: 'right',
                                    id:'cataId',
                                    labelWidth: 140
                                },
                                {
                                    xtype: 'datefield',
                                    flex: 1,
                                    fieldLabel: '<font color=red>*</font>请选择维护开始时间',
                                    allowBlank: false,
                                    labelAlign: 'right',
                                    format:'Y-m-d H:i:s',
                                    blankText: '请选择维护开始时间',
                                    id:'startTime',
                                    labelWidth: 140
                                },
                                {
                                    xtype: 'datefield',
                                    flex: 1,
                                    fieldLabel: '<font color=red>*</font>请选择维护结束时间',
                                    blankText: '请选择维护结束时间',
                                    format:'Y-m-d H:i:s',
                                    allowBlank: false,
                                    labelAlign: 'right',
                                    id:'endTime',
                                    labelWidth: 140
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
                            items: [
								{
                                    xtype: 'container',
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            fieldLabel: '<font color=red>*</font>请选择操作',
                                            labelAlign: 'right',
                                            labelWidth: 140,
                                            allowBlank: false,
                                            displayField: 'text',
        									valueField: 'action',
                                            id:'action'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textareafield',
                                    flex: 2,
                                    fieldLabel: '请输入维护原因',
                                    labelAlign: 'right',
                                    id:'remark',
                                    labelWidth: 140
                                }
                            ]
                        },
                        {
                            xtype: 'gridpanel',
                            id:'grid',
                            flex: 1,
                            height: 695,
                            title: '请选择要维护的项目',
                           // store:'Maintain',
                            features: [
                                       {
                                           ftype: 'grouping'
                                       }
                                   ],
                            columns: [
								{
								    xtype: 'gridcolumn',
								    hidden: true,
								    dataIndex: 'projectId',
								    text: '项目id'
								},
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'projectName',
                                    text: '项目名称'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'districtNo',
                                    text: '区域'
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