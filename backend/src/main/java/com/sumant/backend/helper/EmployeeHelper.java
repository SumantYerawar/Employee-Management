package com.sumant.backend.helper;

import com.sumant.backend.exception.ResourceNotFoundException;
import com.sumant.backend.model.Employee;
import com.sumant.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class EmployeeHelper {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee getEmployee(Long id){
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exists with id: " + id));
        return employee;
    }
}
