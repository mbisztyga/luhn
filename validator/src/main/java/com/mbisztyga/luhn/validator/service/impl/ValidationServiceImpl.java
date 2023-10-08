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

        String tokenWithoutDashes = receivedToken.replaceAll("-", "");

        char[] digits = tokenWithoutDashes.toCharArray();

        int[] reversedDigits = new int[16];

        for (int i = 0; i < 16; i++) {
            reversedDigits[i] = Character.getNumericValue(digits[15 - i]);
        }

        int sum = 0;

        for (int i = 0; i < 16; i++) {
            int digit = reversedDigits[i];

            if (i % 2 == 1) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
        }

        if (sum % 10 == 0) {
            return receivedToken+" is a valid token";
        }
        else {
            return receivedToken+" is an invalid token";
        }
    }
}
