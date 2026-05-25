package com.example.employeecrud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.employeecrud.dto.AuthRequest;
import com.example.employeecrud.dto.RegisterRequest;
import com.example.employeecrud.entity.User;
import com.example.employeecrud.repository.UserRepository;
import com.example.employeecrud.security.JwtUtil;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    // REGISTER
    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {

        User existingUser = userRepository.findByUsername(request.getUsername());

        if (existingUser != null) {
            return "User already exists";
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(request.getPassword());
        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setDepartment(request.getDepartment());
        user.setPhone(request.getPhone());

        userRepository.save(user);

        return "User registered successfully";
    }

    // LOGIN
    @PostMapping("/login")
    public String login(@RequestBody AuthRequest request) {

        User user = userRepository.findByUsername(request.getUsername());

        if (user != null && user.getPassword().equals(request.getPassword())) {
            return jwtUtil.generateToken(user.getUsername());
        }

        return "Invalid Credentials";
    }
}