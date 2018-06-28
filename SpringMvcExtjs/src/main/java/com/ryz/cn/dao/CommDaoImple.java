package com.ryz.cn.dao;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.hibernate.Hibernate;
import org.hibernate.SQLQuery;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import org.springframework.stereotype.Repository;

@Repository
public class CommDaoImple extends HibernateDaoSupport implements CommDao {

	  @Autowired
	  private SessionFactory sessionFactory;
	  
	public <T> void update(T obj) {
		 sessionFactory.getCurrentSession().update(obj);
	}

	public <T> void insert(T obj) {
		 sessionFactory.getCurrentSession().save(obj);
		 //sessionFactory.getCurrentSession().merge(obj);
	}
	
	public <T> void delete(Object o) {
		sessionFactory.getCurrentSession().delete(o);
	}
	
	public <T> void delete(Class<T> clazz, Long id) {
		Object o = sessionFactory.getCurrentSession().load(clazz, id);
		sessionFactory.getCurrentSession().delete(o);
	}

	public <T> T find(Class<T> obj, Long id) {
		String sql = "from "+obj.getName()+" where id = ? ";
		@SuppressWarnings({ "deprecation", "unchecked" })
		List<T> list = sessionFactory.getCurrentSession().find(sql, id, Hibernate.LONG);
		if(list.size() == 0){
			return null;
		}else{
			return list.get(0);
		}
	}
	
	@SuppressWarnings("unchecked")
	public <T> T  find(Class<T> clazz, Serializable id) {
		
		 Object res = sessionFactory.getCurrentSession().get(clazz, id);
		 return (T)res;
	}

	public List<Map<String,Object>> selectSql (String sql,String[] params){
		SQLQuery query = sessionFactory.getCurrentSession().createSQLQuery(sql);  
        for(int i=0;i<params.length;i++){
        	query.setString(i, params[i]);
        }
        List<?> results = query.list();
        String[] arr = getColumn(sql);
        Map<String,Object> map = null;
        List<Map<String,Object>> mapList = new ArrayList<Map<String,Object>>();
        for(int i=0;i<results.size();i++){
			Object[] row = (Object[])results.get(i);
			map = new HashMap<String,Object>();
			for(int j=0;j<arr.length;j++){
				map.put(arr[j], row[j]);
			}
			mapList.add(map);
		}
        
        return mapList;
	}
	
	public static String[] getColumn(String sql){
		String str1 = sql.substring(sql.indexOf("select")+7,sql.indexOf("from"));
		while(str1.indexOf(", ")!=-1||str1.indexOf(" ,")!=-1){
			str1 = str1.replace(", ", ",").replace(" ,", ",");
		}
		String[] arr = str1.split(",");
		int index;
		for(int i = 0;i<arr.length;i++){
			index = arr[i].indexOf(" ");
			if(index !=-1){
				arr[i] = arr[i].substring(arr[i].indexOf(".")+1);
				arr[i] = arr[i].substring(index).replace(" ", "");
			}
		}
		return arr;
	}

	public List<Map<String, Object>> selectSql(String sql) {
		return this.selectSql(sql,new String[]{});
	}
	
	public List<Map<String,Object>> executeQuery(String sql,String[] params){
		@SuppressWarnings("deprecation")
		List<Map<String,Object>> mapList = new ArrayList<Map<String,Object>>();
		try {
			Connection con = sessionFactory.getCurrentSession().connection();
			PreparedStatement st = con.prepareStatement(sql);
			for(int i = 0;i<params.length;i++){
				st.setObject(i+1, params[i]);
			}
			ResultSet res = st.executeQuery();
			ResultSetMetaData rsmd = res.getMetaData();
			int count = rsmd.getColumnCount();
			String[] columns = new String[count];
			for(int j=0;j<count;j++){
				columns[j] = rsmd.getColumnName(j+1);
			}
			Map<String,Object> map = null;
			while(res.next()){
				map = new HashMap<String,Object>();
				for(String c : columns){
					map.put(c, res.getString(c));
				}
				mapList.add(map);
			}
			
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return mapList;
	}
	public List<Map<String,Object>> executeQuery(String sql){
		return this.executeQuery(sql, new String[]{});
	}
	
	public int executeUpdate(String sql,String[] params){
		try {
			@SuppressWarnings("deprecation")
			Connection con = sessionFactory.getCurrentSession().connection();
			PreparedStatement st = con.prepareStatement(sql);
			for(int i = 0;i<params.length;i++){
				st.setObject(i+1, params[i]);
			}
			int res = st.executeUpdate();
			return res;
			
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return 0;
	}
	public int executeUpdate(String sql){
		return this.executeUpdate(sql, new String[]{});
	}
	
}
