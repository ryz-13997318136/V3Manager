<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>登录系统</title>
<link rel="stylesheet" type="text/css" href="extjs/resources/css/ext-all.css">  
<script type="text/javascript" src="extjs/ext-base.js"></script>  
<script type="text/javascript" src="extjs/ext-all.js"></script> 
</head>
<script type="text/javascript">  
   Ext.onReady(function(){
	   Ext.create('Ext.form.Panel', {
		    title: '管理员登录',
		    bodyPadding: 5,
		    width: 350,
		    url: 'ckeckLogin',
		    layout: 'anchor',
		    defaults: {
		        anchor: '100%'
		    },
		    items: [
			    	{
				        xtype:'textfield',
				    	fieldLabel: '用户名',
				        name: 'userName',
				        allowBlank: false
			    	},
			    	{
			    		xtype:'textfield',
			    		fieldLabel: '密码',
				        name: 'password',
				        inputType: 'password',
				        allowBlank: false
				    }
		    	],

		    buttons: [
				    	{
					        text: '登  陆',
					        formBind: true, //only enabled once the form is valid
					        disabled: true,
					        handler: function() {
					            var form = this.up('form').getForm();
					            if (form.isValid()) {
					                form.submit({
					                    success: function(form, res) {
					                       console.log(res.result.msg);
					                       window.location.href="index";
					                    },
					                    failure: function(form, res) {
					                        Ext.Msg.alert('登陆失败', res.result.msg);
					                    }
					                });
					            }
				        }
				    },
			    	{
				        text: '重  置',
				        handler: function() {
				            this.up('form').getForm().reset();
				        }
			    	}, 	
		    	],
		    renderTo:'content-div'
		});
 
	   
   });
   
   
   
</script>  
<body>
<div id="content-div" style="left: 36%;top: 25%;position: absolute;"></div>  
</body>
</html>