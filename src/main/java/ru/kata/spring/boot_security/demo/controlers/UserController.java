package ru.kata.spring.boot_security.demo.controlers;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.User;


@Controller
public class UserController {
@GetMapping("/")
    public String mainPage(Model model){
    User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    model.addAttribute("currentUser",user);
    return "index";
}

}
