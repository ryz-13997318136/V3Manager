Ext.define('Menu.model.MenuModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'string'
        },
        {
            name: 'text',
            type: 'string'
        },
        {
            name: 'leaf',
            type: 'boolean'
        },
        {
            name: 'parentId',
            type: 'string'
        },
        {
            name: 'url',
            type: 'string'
        },
        {
            name: 'index1',
            type: 'string'
        }
       
    ]
});