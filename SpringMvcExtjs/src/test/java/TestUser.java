import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ryz.cn.entity.User;
import com.ryz.cn.service.UserService;

public class TestUser {

	private ApplicationContext context = null;
	private UserService userService = null;
	
	{
        context= new ClassPathXmlApplicationContext("springContext.xml");  
        userService=context.getBean(UserService.class);
   }
	
	@Test
    public void test3()
    {
		User user = new User();
    	user.setId(System.currentTimeMillis());
    	user.setName("ryz");
    	user.setPassword("123");
    	userService.saveUser(user);
    }
}
