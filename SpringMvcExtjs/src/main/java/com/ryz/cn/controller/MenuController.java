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

import com.ryz.cn.entity.Menu;
import com.ryz.cn.entity.User;
import com.ryz.cn.service.MenuService;

@Controller
@RequestMapping("/menu")
public class MenuController {
	
	@Autowired
	private MenuService menuService ;
	
	@RequestMapping(value = "/loadMenuByUserId",method = RequestMethod.GET)
	@ResponseBody
	public Map<String,Object> loadMenuByUserId(
			@RequestParam("userId") String userId,
			@RequestParam("parentId") String parentId){
		Map<String,Object> list = menuService.loadMenuByUserId(userId,parentId);
		return list;
	}
	@RequestMapping(value = "/loadAllMenu",method = RequestMethod.GET)
	@ResponseBody
	public Map<String,Object> loadAllMenu(
			@RequestParam("parentId") String parentId){
		Map<String,Object> list = menuService.loadAllMenu(parentId);
		return list;
	}
	
	@RequestMapping(value = "/addMenu",method = RequestMethod.POST)
	@ResponseBody
	public  Map<String,Object> addMenu(@RequestBody Menu menu){
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("result", "SUCCESS");
		result.put("message", "操作成功！");
		try{
			if(menu == null){
				result.put("result", "FAIL");
				result.put("message", "菜单为空！");
				return result;
			}
			if(menu.getId() == null){
				menu.setId(System.currentTimeMillis());
				menuService.addMenu(menu);
			}else{
				menuService.updateMenu(menu);
			}
			
		}catch(Exception e){
			result.put("result", "FAIL");
			result.put("message", e.getMessage());
		}
		return result;
	}
	@RequestMapping(value = "/deleteMenu",method = RequestMethod.POST)
	@ResponseBody
	public  Map<String,Object> deleteMenu(@RequestParam long menuId){
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("result", "SUCCESS");
		result.put("message", "操作成功！");
		try{
			menuService.deleteMenu(menuId);
		}catch(Exception e){
			result.put("result", "FAIL");
			result.put("message", e.getMessage());
		}
		return result;
	}
	@RequestMapping(value = "/loadAllMenuByRole",method = RequestMethod.GET)
	@ResponseBody
	public Map<String,Object> loadAllMenuByRole(
			@RequestParam("roleId") String roleId,
			@RequestParam("parentId") String parentId){
		Map<String,Object> list = menuService.loadAllMenuByRole(roleId,parentId);
		return list;
	}
	
}
