package com.ryz.cn.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ryz.cn.dao.CommDao;
import com.ryz.cn.entity.User;

@Service
public class UserService {
	 @Autowired
	 private CommDao dao;
	 
	 @Transactional
	 public  Map<String,Object> loadAllUser(){
		 String sql = "select id id,name name ,password password from e_user ";
		 List<Map<String,Object>> list = dao.selectSql(sql);
		 Map<String,Object> map = new HashMap<String,Object>();
		 map.put("Users", list);
		 return map;
	 }
	 
	 @Transactional
	 public  User findByNameAndPassword(String userName,String password){
		 String sql = "select id id,name name ,password password from e_user where name = ? and password = ? ";
		 List<Map<String,Object>> list = dao.selectSql(sql,new String[]{userName,password});
		 User user = null;
		 if(list.size()>0){
			 user = new User();
			 Map<String,Object> map = list.get(0);
			 user.setId(Long.valueOf(map.get("id").toString()));
			 user.setName(map.get("name").toString());
			 user.setPassword(map.get("password").toString());
		 }
		 return user;
	 }
	 
	 
	 @Transactional
	 public void saveUser(User user){
	        dao.insert(user);
	        
	    }
	 
	 @Transactional
	 public User find(Long id){
	        return dao.find(User.class,id);
	        
	    }
	 
	 @Transactional
	 public void delete(Long id){
	        dao.delete(User.class,id);
	        
	    }
	 
	 @Transactional
	 public void update(User user){
	        dao.update(user);
	    }
	 
	 @Transactional
	 public  Object test(){
		 String sql = "select id ,name  ,password  from e_user where name = ? and password = ? ";
		 return dao.executeQuery(sql,new String[]{"ryz","123"});
		
	 }
	 @Transactional
	 public  Map<String,Object> loadUserByKey(String keyword){
		 String sql = "select id,name, password from e_user where name like ?";
		 List<Map<String,Object>> list = dao.executeQuery(sql, new String[]{"%"+keyword+"%"});
		 Map<String,Object> map = new HashMap<String,Object>();
		 map.put("Users", list);
		 return map;
	 }
}
