package com.ryz.cn.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.ryz.cn.entity.User;
import com.ryz.cn.service.UserService;

@Controller
@RequestMapping("/")
public class SystemController {
	
	@Autowired
	private UserService userService ;
	
	@RequestMapping(value = "ckeckLogin",method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> ckeckLogin(@RequestParam("userName")String userName,
			@RequestParam("password")String password,
			HttpServletRequest request,HttpServletResponse response){
		Map<String,Object> res = new HashMap<String,Object>();
		User user = userService.findByNameAndPassword(userName, password);
		if(user == null){
			res.put("success", false);
			res.put("msg", "用户名密码不对~");
		}else{
			request.getSession().setAttribute("cUser", user);
			res.put("success", true);
			res.put("msg", "登录成功~");
		}
		return res;
	}
	
	@RequestMapping(value = "index",method = RequestMethod.GET)
	public ModelAndView index(HttpServletRequest request){
		 	ModelAndView mv = new ModelAndView("index");
	        return mv;
	}
	@RequestMapping(value = "login",method = RequestMethod.GET)
	public ModelAndView login(HttpServletRequest request){
		 	ModelAndView mv = new ModelAndView("login");
	        return mv;
	}
	
	@RequestMapping(value = "loginOut",method = RequestMethod.GET)
	public ModelAndView loginOut(HttpServletRequest request){
			request.getSession().invalidate();
		 	ModelAndView mv = new ModelAndView("login");
	        return mv;
	}
}
