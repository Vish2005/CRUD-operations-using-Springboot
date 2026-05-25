package com.example.employeecrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.employeecrud.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}