package ru.kata.spring.boot_security.demo.controlers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import ru.kata.spring.boot_security.demo.dao.RoleDAO;
import ru.kata.spring.boot_security.demo.dao.UserDAO;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.util.Collections;
import java.util.List;


@RestController
@RequestMapping("/api")
public class RestControllers {
    private final UserService userDAO;
    private final RoleService roleDAO;

    @Autowired
    public RestControllers(UserService userDAO, RoleService roleDAO) {
        this.userDAO = userDAO;
        this.roleDAO = roleDAO;
    }

    @Secured("ROLE_ADMIN")
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userDAO.findAll(), HttpStatus.OK);
    }

    @Secured("ROLE_ADMIN")
    @GetMapping("/users/{id}")
    public ResponseEntity<User> findUser(@PathVariable("id") Long id) {
        return new ResponseEntity<>(userDAO.findById(id), HttpStatus.OK);
    }

    @Secured("ROLE_ADMIN")
    @DeleteMapping("/users/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long id) {
        userDAO.deleteById(id);
        return new ResponseEntity<>("User deleted", HttpStatus.OK);
    }

    @Secured("ROLE_ADMIN")
    @PostMapping("/users")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        userDAO.save(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @Secured("ROLE_ADMIN")
    @PutMapping("/users/{id}")
    public ResponseEntity<?> editUser(@RequestBody User user) {
        userDAO.save(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @Secured("ROLE_ADMIN")
    @GetMapping("/roles/{id}")
    public ResponseEntity<Role> getRole(@PathVariable Long id) {
        return new ResponseEntity<>(roleDAO.findRole(id), HttpStatus.OK);
    }


    @GetMapping("/users/actuser")
    public ResponseEntity<User> getCurrentUser() {
        return new ResponseEntity<>((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal(), HttpStatus.OK);
    }
    @GetMapping("/users/lastuser")
    public ResponseEntity<User> getLastUser() {
        return new ResponseEntity<>(userDAO.findFirstByOrderByIdDesc() , HttpStatus.OK);
    }
}
