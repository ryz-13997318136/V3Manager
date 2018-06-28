package com.ryz.cn.entity;

public class Menu {
	private Long id;
	private int index1;
	private String name;
	private String url;
	private Long parentId;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getIndex1() {
		return index1;
	}
	public void setIndex1(int index1) {
		this.index1 = index1;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}

	public Long getParentId() {
		return parentId;
	}
	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}
	@Override
	public String toString() {
		return "Menu [id=" + id + ", index1=" + index1 + ", name=" + name + ", url=" + url + ", parentId=" + parentId
				+ "]";
	}
	
	
}
