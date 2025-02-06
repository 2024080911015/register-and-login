package servlets;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class Addservlet extends HttpServlet{
    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("hello world");
        String username=req.getParameter("userName");
        String password= req.getParameter("password");
        String email=req.getParameter("email");
        System.out.println("username:"+username);
        System.out.println("password:"+password);
        System.out.println("email:"+email);
    }
}

