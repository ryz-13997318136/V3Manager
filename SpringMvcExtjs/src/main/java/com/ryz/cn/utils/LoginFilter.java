package com.ryz.cn.utils;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginFilter implements Filter{

	public void destroy() {
		
	}

	public void doFilter(ServletRequest paramServletRequest, ServletResponse paramServletResponse,
			FilterChain paramFilterChain) throws IOException, ServletException {
		
		  HttpServletRequest request=(HttpServletRequest)paramServletRequest;  
	      HttpServletResponse response=(HttpServletResponse)paramServletResponse;
	      String url = request.getRequestURI();
	      // 静态资源放行
	      if(url.contains(".css") || url.contains(".js") || url.contains(".png")|| url.contains(".do")){
	    	  paramFilterChain.doFilter(paramServletRequest, paramServletResponse);
	      }else{
	    	  // 如果不是静态资源
	    	  if(request.getRequestURI().indexOf("login") == -1 && request.getRequestURI().indexOf("ckeckLogin") == -1 ){
		    	  if(request.getSession().getAttribute("cUser")== null ){  
		    		  response.sendRedirect(request.getContextPath()+"/login"); 
		    	  }else{  
		    		  paramFilterChain.doFilter(paramServletRequest, paramServletResponse);  
		    	  } 
		      }else{
		    	  paramFilterChain.doFilter(paramServletRequest, paramServletResponse);  
		      }
	      }
	     
	}

	public void init(FilterConfig paramFilterConfig) throws ServletException {
		
	}

}
