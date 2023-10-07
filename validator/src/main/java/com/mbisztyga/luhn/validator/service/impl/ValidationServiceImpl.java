package com.mbisztyga.luhn.validator.service.impl;

import com.mbisztyga.luhn.validator.service.ValidationService;
import org.springframework.stereotype.Component;

@Component
public class ValidationServiceImpl implements ValidationService {
    @Override
    public String validateToken(String receivedToken) {
        return validateUsingLuhn(receivedToken);
    }

    private String validateUsingLuhn(String receivedToken) {
        return receivedToken+"string message about validness";
    }
}
