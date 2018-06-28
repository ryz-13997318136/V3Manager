package com.ryz.cn.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ryz.cn.dao.CommDao;
import com.ryz.cn.entity.Role;
import com.ryz.cn.entity.RoleMenu;
import com.ryz.cn.entity.UserRole;

@Service
public class RoleService {

	@Autowired
	 private CommDao dao;
	
	 @Transactional
	 public  Map<String,Object> loadAllRole(){
		 String sql = "select id ,name   from e_role ";
		 List<Map<String,Object>> list = dao.executeQuery(sql);
		 Map<String,Object> map = new HashMap<String,Object>();
		 map.put("roles", list);
		 return map;
	 }
	 
	 @Transactional
	 public void saveRole(Role role){
		 dao.insert(role);
	 }
	 @Transactional
	 public void updateRole(Role role){
		 dao.update(role);
	 }
	 @Transactional
	 public void deleteRole(long roleId){
		 dao.delete(Role.class, roleId);
	 }
	 @Transactional
	 public  Map<String,Object> loadRoleByUserId(long userId){
		 String sql = " select r.*, case when  ur.role_id is null then 'false' else 'true' end checked from e_role r "
		 		+ "left join e_user_role ur on ur.user_id = ? and ur.role_id = r.id ";
		 List<Map<String,Object>> list = dao.executeQuery(sql, new String[]{String.valueOf(userId)});
		 Map<String,Object> map = new HashMap<String,Object>();
		 map.put("roles", list);
		 return map;
	 }
	 @Transactional
	 public void userRelationRole(long userId,long[] roleIds){
		 String sql = "delete from e_user_role where user_id = ? ";
		 int count = dao.executeUpdate(sql, new String[]{String.valueOf(userId)});
		 System.out.println("一共删除 "+count+"行记录");
		 if(roleIds.length==1 && roleIds[0] == 77){
			 return ;
		 }
		 for(long roleId : roleIds){
			 UserRole userRole = new UserRole();
			 userRole.setRoleId(roleId);
			 userRole.setUserId(userId);
			 dao.insert(userRole);
		 }
	 }
	 
	 @Transactional
	 public void roleRelationMenu(long roleId,long menuId,boolean checked ){
		 RoleMenu roleMenu = new RoleMenu();
		 roleMenu.setMenuId(menuId);
		 roleMenu.setRoleId(roleId);
		 
		 if(checked){
			 dao.insert(roleMenu);
		 }else{
			 RoleMenu newroleMenu =  dao.find(RoleMenu.class, roleMenu);
			 dao.delete(newroleMenu);
		 }
		 
	 }
	 
}
