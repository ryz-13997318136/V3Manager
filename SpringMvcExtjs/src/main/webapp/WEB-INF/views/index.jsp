<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Spring 4 MVC - HelloWorld Index Page</title>
<link rel="stylesheet" type="text/css" href="extjs/resources/css/ext-all.css">  
<script type="text/javascript" src="extjs/ext-base.js"></script>  
<script type="text/javascript" src="extjs/ext-all.js"></script> 
<script type="text/javascript" src="js/index/app.js"></script>  
</head>
<script type="text/javascript">  
let _cuser =  '<%=session.getAttribute("cUser")%>';
let _cuser_srt = _cuser.substring(_cuser.indexOf('[')+1,_cuser.length-1);
let _cuser_srt_arr = _cuser_srt.split(',');
var _gg = {};
_gg['_cuserId'] = _cuser_srt_arr[0].substring(_cuser_srt_arr[0].indexOf('=')+1);
_gg['_cuserName'] = _cuser_srt_arr[1].substring(_cuser_srt_arr[1].indexOf('=')+1);
console.log(_gg);
</script>  
<body>
 
</body>
</html>