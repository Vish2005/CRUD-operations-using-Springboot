package com.example.employeecrud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.employeecrud.entity.Employee;
import com.example.employeecrud.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    // CREATE
    public Employee saveEmployee(Employee employee) {
        return repository.save(employee);
    }

    // READ ALL
    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    // READ BY ID
    public Employee getEmployeeById(Long id) {
        return repository.findById(id).orElse(null);
    }

    // UPDATE
    public Employee updateEmployee(Long id, Employee employee) {

        Employee existing = repository.findById(id).orElse(null);

        if (existing != null) {
            existing.setName(employee.getName());
            existing.setDepartment(employee.getDepartment());
            existing.setSalary(employee.getSalary());

            return repository.save(existing);
        }

        return null;
    }

    // DELETE BY ID
    public String deleteEmployee(Long id) {
        repository.deleteById(id);
        return "Employee Deleted Successfully";
    }

    // DELETE ALL (NEW)
    public String deleteAllEmployees() {
        repository.deleteAllInBatch();   // fast bulk delete
        return "All Employees Deleted Successfully";
    }
}