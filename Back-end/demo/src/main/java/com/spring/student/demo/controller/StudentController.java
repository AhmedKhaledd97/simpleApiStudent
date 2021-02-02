package com.spring.student.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.student.demo.model.AuthenticationBean;
import com.spring.student.demo.model.student;
import com.spring.student.demo.services.StudentService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/system")
public class StudentController {
	@Autowired
	private StudentService studentService;
	
	@GetMapping("/students")
	public List<student> getAllStudents (){
		return studentService.getAllStudents();
		
	}
	@GetMapping("/students/{id}")
	public Optional<student> getById(@PathVariable int id) {
		return studentService.getById(id);
	}
	
	@PostMapping("/students")
	public student AddStudent(@RequestBody student s) {
		return studentService.AddStudent(s);
	}
	@PutMapping("/students/{id}")
	public student updateStudent(@RequestBody student s , @PathVariable int id) {
		s.setId(id);
		return studentService.updateStudent(s);
	}
	
	@DeleteMapping("/students/{id}")
	public void deleteStudent(@PathVariable int id) {
		
	}
	@GetMapping("/basicauth")
    public AuthenticationBean BasicAuthentication(){
        return new AuthenticationBean("you are Authentication");
    }
	
}