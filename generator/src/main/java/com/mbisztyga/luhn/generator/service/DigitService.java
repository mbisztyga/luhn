package com.mbisztyga.luhn.generator.service;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DigitService {
    String generateToken(List<Integer> availableNumbers);
}
