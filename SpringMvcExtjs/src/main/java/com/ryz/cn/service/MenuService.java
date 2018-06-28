package com.ryz.cn.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ryz.cn.dao.CommDao;
import com.ryz.cn.entity.Menu;
import com.ryz.cn.entity.User;

@Service
public class MenuService {

	 @Autowired
	 private CommDao dao;
	 
	@Transactional
	public Map<String,Object> loadMenuByUserId(String userId,String parentId){
		String sql = "select id id,  index1 index1 ,text text, leaf leaf,url url, parentId parentId from ( "
				+ "select m.id  id,  m.index1  index1 ,m.name text, "
				+ "case when m.parent_id = 0 then false else true end   leaf,m.url url ,m.parent_id  parentId "
				+ "from e_menu m join e_role_menu rm on rm.menu_id = m.id "
				+ "where rm.role_id in (select ur.role_id from e_user_role ur "
				+ "where ur.user_id = ?) and m.parent_id=?) a ";
		List<Map<String,Object>> list = dao.selectSql(sql, new String[]{userId,parentId});
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("menu", list);
		return map;
	}
	
	@Transactional
	public Map<String,Object> loadAllMenuByRole(String roleId,String parentId){
		String sql = " select id id,  index1 index1  ,text text , leaf leaf,url url , parentId parentId ,checked checked from ( "
				+ "select m.id  id,  m.index1  index1 ,m.name text, "
				+ "case when m.parent_id = 0 then false else true end   leaf,m.url url ,m.parent_id  parentId ,"
				+ "case when rm.role_id is null then 'false' else 'true' end checked "
				+ "from e_menu m left join e_role_menu rm on rm.menu_id = m.id and rm.role_id = ? "
				+ "where m.parent_id=?	) a ";
		List<Map<String,Object>> list = dao.selectSql(sql, new String[]{roleId,parentId});
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("menu", list);
		return map;
	}
	
	
	@Transactional
	public Map<String,Object> loadAllMenu(String parentId){
		String sql = "select id id,  index1 index1 ,text text, leaf leaf,url url, parentId parentId from ( "
				+ "select m.id  id,  m.index1  index1 ,m.name text, "
				+ "case when m.parent_id = 0 then false else true end   leaf,m.url url ,m.parent_id  parentId "
				+ "from e_menu m  where m.parent_id=? ) a ";
		List<Map<String,Object>> list = dao.executeQuery(sql, new String[]{parentId});
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("menu", list);
		return map;
	}
	
	@Transactional
	 public void addMenu(Menu menu){
	        dao.insert(menu);
	        
	    }
	@Transactional
	 public void updateMenu(Menu menu){
	        dao.update(menu);
	        
	    }
	@Transactional
	public void deleteMenu(long menuId){
		dao.delete(Menu.class, menuId);
	}
}
