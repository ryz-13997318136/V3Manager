<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="extjs/resources/css/ext-all.css">  
<script type="text/javascript" src="extjs/ext-base.js"></script>  
<script type="text/javascript" src="extjs/ext-all.js"></script>  
</head>
<script type="text/javascript">  
    Ext.onReady(function(){  

	var store = Ext.create('Ext.data.TreeStore', {
                root: {
                    expanded: true,
                    children: [
                { text: "detention", leaf: true },
                {
                    text: "homework",
                    expanded: true,
                    children: [
                        { text: "book report", leaf: true },
                        { text: "alegrbra", leaf: true }
                    ]
                },
                { text: "other", leaf: true },
                { text: "other", leaf: true },
                { text: "other", leaf: true },
                { text: "other", leaf: true },
                { text: "other", leaf: true },
                { text: "other", leaf: true },
                { text: "other", leaf: true },
                { text: "other", leaf: true },
                { text: "other", leaf: true },
                { text: "other", leaf: true },
                { text: "other", leaf: true }
            ]
                }
            });
	var i = 0;		
	
	var tree = Ext.create('Ext.tree.Panel', {
                region: 'west', //for border layout
                collapsible: true,
                title: 'Simple Tree',
                bodyStyle: 'background:#ffc;',
                width: 200,
                store: store,
                rootVisible: false,
                margins: '5 0 5 5',
				listeners : {
					itemclick: function(){
						
					main.add(
						{
							xtype:'panel',
							html:'<iframe scrolling="auto" frameborder="0" width="100%" height="100%" src="file:///E:/study/extjs/extjs/tab1.html"> </iframe>',
							title: 'Test'+(i++),
							closable : true
						}
					);
				}
				}
            });
	var main = Ext.create('Ext.tab.Panel', {
                region: 'center', //for border layout
                title: 'Main Panel',
                bodyPadding: 10,             
                margins: '5 5 5 5',
				layout: 'fit',
            });
	Ext.create('Ext.panel.Panel', {
                layout: 'border',
                width: 600,
                height: 250,
                items: [
                tree,
                main
            ],
                renderTo: Ext.getBody()
            });

	});  
</script>  
<body>
    <center>
        <h2>Hello World</h2>
        <h2>
            ${message} ${name}     </h2>
    </center>
</body>
</html>