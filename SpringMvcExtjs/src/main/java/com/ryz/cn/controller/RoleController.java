package com.ryz.cn.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ryz.cn.entity.Role;
import com.ryz.cn.entity.User;
import com.ryz.cn.service.RoleService;

@Controller
@RequestMapping("/role")
public class RoleController {
	
	@Autowired
	private RoleService roleService;
	
	@RequestMapping(value = "/loadAllRole",method = RequestMethod.GET)
	@ResponseBody
	public  Map<String,Object> loadAllRole(){
		 Map<String,Object> map = roleService.loadAllRole();
		return map;
	}
	
	@RequestMapping(value = "/addRole",method = RequestMethod.POST)
	@ResponseBody
	public  Map<String,Object> addRole(@RequestBody Role role){
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("result", "SUCCESS");
		result.put("message", "操作成功！");
		try{
			if(role == null){
				result.put("result", "FAIL");
				result.put("message", "角色为空！");
				return result;
			}
			if(role.getId() == null){
				role.setId(System.currentTimeMillis());
				roleService.saveRole(role);
			}else{
				roleService.updateRole(role);
			}
			
		}catch(Exception e){
			result.put("result", "FAIL");
			result.put("message", e.getMessage());
		}
		return result;
	}
	
	@RequestMapping(value = "/deleteRole",method = RequestMethod.POST)
	@ResponseBody
	public  Map<String,Object> deleteRole(@RequestParam long roleId){
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("result", "SUCCESS");
		result.put("message", "操作成功！");
		try{
			roleService.deleteRole(roleId);
		}catch(Exception e){
			result.put("result", "FAIL");
			result.put("message", e.getMessage());
		}
		return result;
	}
	
	@RequestMapping(value = "/loadRoleByUserId",method = RequestMethod.GET)
	@ResponseBody
	public  Map<String,Object> loadRoleByUserId(@RequestParam("userId") long userId){
		return roleService.loadRoleByUserId(userId);
	}
	
	@RequestMapping(value = "/userRelationRole",method = RequestMethod.POST)
	@ResponseBody
	public  Map<String,Object> userRelationRole(@RequestParam long userId,@RequestParam long[] roleIds){
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("result", "SUCCESS");
		result.put("message", "操作成功！");
		try{
			roleService.userRelationRole(userId,roleIds);
		}catch(Exception e){
			result.put("result", "FAIL");
			result.put("message", e.getMessage());
		}
		return result;
	}
	@RequestMapping(value = "/roleRelationMenu",method = RequestMethod.POST)
	@ResponseBody
	public  Map<String,Object> roleRelationMenu(@RequestParam long roleId,
			@RequestParam long menuId,
			@RequestParam boolean checked){
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("result", "SUCCESS");
		result.put("message", "操作成功！");
		try{
			roleService.roleRelationMenu(roleId,menuId,checked);
		}catch(Exception e){
			result.put("result", "FAIL");
			result.put("message", e.getMessage());
		}
		return result;
	}
	
}
