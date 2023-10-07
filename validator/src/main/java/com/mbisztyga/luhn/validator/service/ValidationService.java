package com.mbisztyga.luhn.validator.service;

import org.springframework.stereotype.Service;

@Service
public interface ValidationService {
    String validateToken(String receivedToken);
}
