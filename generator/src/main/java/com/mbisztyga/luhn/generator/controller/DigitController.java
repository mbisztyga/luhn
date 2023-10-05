package com.mbisztyga.luhn.generator.controller;

import com.mbisztyga.luhn.generator.service.DigitService;
import com.mbisztyga.luhn.generator.service.impl.DigitServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DigitController {

    private final DigitService digitService;

    @Autowired
    public DigitController(DigitServiceImpl digitService) {
        this.digitService = digitService;
    }

    @PostMapping("/generate")
    public String generateToken(@RequestBody List<Integer> numbers){

    }
}
