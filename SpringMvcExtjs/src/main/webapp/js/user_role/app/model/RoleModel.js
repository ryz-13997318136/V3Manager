Ext.define('UserToRole.model.RoleModel', {
    extend: 'Ext.data.Model',

    fields: [
    	{
            name: 'checked',
            type: 'boolean'
        },
        {
            name: 'id'
        },
        {
            name: 'name'
        }
    ]
});