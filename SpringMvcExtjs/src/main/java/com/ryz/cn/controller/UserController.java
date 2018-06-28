package com.ryz.cn.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ryz.cn.entity.User;
import com.ryz.cn.service.UserService;

@Controller
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService ;
	
	@RequestMapping(value = "/loadAllUser",method = RequestMethod.GET)
	@ResponseBody
	public  Map<String,Object> loadMenuByUserId(){
		 Map<String,Object> map = userService.loadAllUser();
		return map;
	}
	
	@RequestMapping(value = "/addUser",method = RequestMethod.POST)
	@ResponseBody
	public  Map<String,Object> addUser(@RequestBody User user){
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("result", "SUCCESS");
		result.put("message", "操作成功！");
		try{
			if(user == null){
				result.put("result", "FAIL");
				result.put("message", "用户为空！");
				return result;
			}
			if(user.getId() == null){
				user.setId(System.currentTimeMillis());
				userService.saveUser(user);
			}else{
				userService.update(user);
			}
			
		}catch(Exception e){
			result.put("result", "FAIL");
			result.put("message", e.getMessage());
		}
		return result;
	}
	
	@RequestMapping(value = "/deleteUser",method = RequestMethod.POST)
	@ResponseBody
	public  Map<String,Object> deleteUser(@RequestParam long userId){
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("result", "SUCCESS");
		result.put("message", "操作成功！");
		try{
			userService.delete(userId);
		}catch(Exception e){
			result.put("result", "FAIL");
			result.put("message", e.getMessage());
		}
		return result;
	}
	
	@RequestMapping(value = "/loadUserByKey",method = RequestMethod.GET)
	@ResponseBody
	public  Map<String,Object> loadUserByKey(@RequestParam("keyword")String keyword){
		 Map<String,Object> map = userService.loadUserByKey(keyword);
		return map;
	}
	
}
