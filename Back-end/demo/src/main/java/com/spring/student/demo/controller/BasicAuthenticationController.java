package com.spring.student.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.student.demo.model.AuthenticationBean;

@CrossOrigin("http://localhost:4200")
@RestController
public class BasicAuthenticationController {

    @GetMapping("/basicauth")
    public AuthenticationBean BasicAuthentication(){
        return new AuthenticationBean("you are Authentication");
    }
}