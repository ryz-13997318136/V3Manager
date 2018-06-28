<%@ page language="java" contentType="text/html;  charset=utf-8"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"/>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;  charset=utf-8"/>
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/extjs/resources/css/ext-all.css"/>  
 <script type="text/javascript" src="<%=request.getContextPath()%>/extjs/ext-base.js"></script>  
<script type="text/javascript" src="<%=request.getContextPath()%>/extjs/ext-all.js"></script>  
<script type="text/javascript" src="<%=request.getParameter("modules")%>/app.js"></script>  
</head>
<body>
		<%  
            String name=request.getParameter("modules");  
            out.print("Cannot load your application:"+name);  
        %>  
   <script type="text/javascript"> 
   var name1 = '<%=request.getParameter("modules")%>';
   //alert(name1);
   var _username =  '<%=request.getAttribute("_username")%>';
   //console.log(_username);
   </script>
</body>
</html>