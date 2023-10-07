package com.mbisztyga.luhn.validator.controller;

import com.mbisztyga.luhn.validator.service.ValidationService;
import com.mbisztyga.luhn.validator.service.impl.ValidationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ValidationController {

    private final ValidationServiceImpl validationService;

    @Autowired
    public ValidationController(ValidationService validationService) {
        this.validationService = (ValidationServiceImpl) validationService;
    }

    @PostMapping("/validate")
    @CrossOrigin(origins = "http://localhost:3000")
    public String validateToken(@RequestBody String token){
        return validationService.validateToken(token);
    }
}
