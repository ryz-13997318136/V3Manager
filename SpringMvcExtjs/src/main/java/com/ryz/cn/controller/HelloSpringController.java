package com.ryz.cn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.ryz.cn.dao.CommDao;
import com.ryz.cn.entity.ResBo;
import com.ryz.cn.entity.User;
import com.ryz.cn.service.UserService;

@Controller
public class HelloSpringController {
	
	@Autowired
	private UserService userService ;
	
    String message = "Welcome  to Spring MVC!";
 
    @RequestMapping("/hello")
    public ModelAndView showMessage(@RequestParam(value = "name", required = false, defaultValue = "Spring") String name) {
 
        ModelAndView mv = new ModelAndView("hellospring");
        mv.addObject("message", message);
        mv.addObject("name", name);
        return mv;
    }
    
    @RequestMapping("/insert")
    @ResponseBody
    public String insert() {
    	User user = new User();
    	user.setId(System.currentTimeMillis());
    	user.setName("ryz");
    	user.setPassword("123");
    	userService.saveUser(user);
        return "1";
    }
    
    @RequestMapping("/find")
    @ResponseBody
    public String find() {
    	long id = 1528354290976l;
    	User user = userService.find(id);
        return user.toString();
    }
    
    @RequestMapping("/delete")
    @ResponseBody
    public String delete() {
    	long id = 1528354291543l;
    	userService.delete(id);
        return "1";
    }
    
    @RequestMapping("/update")
    @ResponseBody
    public String update() {
    	User user = new User();
    	long id = 1528354290976l;
    	user.setId(id);
    	user.setName("ryz123");
    	user.setPassword("123");
    	userService.update(user);
        return "1";
    }
    
    @RequestMapping("/test")
    @ResponseBody
    public ResBo test() {
    	ResBo bo = new ResBo();
    	long id = 1528354290976152814l;
    	bo.setId(id);
    	return bo;
    }
}
