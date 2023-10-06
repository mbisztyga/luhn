package com.mbisztyga.luhn.generator.service.impl;

import com.mbisztyga.luhn.generator.service.DigitService;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

@Component
public class DigitServiceImpl implements DigitService {

    @Override
    public String generateToken(List<Integer> availableNumbers){
        System.out.println(availableNumbers);
        return generateTokenFromDigits(availableNumbers);
    }

    public static String generateTokenFromDigits(List<Integer> digits) {
        // Check if digit 0 is in the original array
        boolean containsZero = digits.contains(0);

        // Create a list to store digits for the token
        List<Integer> tokenDigits = new ArrayList<>();

        // Add each unique digit from the input list to tokenDigits
        for (Integer digit : digits) {
            if (!tokenDigits.contains(digit)) {
                tokenDigits.add(digit);
            }
        }

        // Randomly select additional digits from the input list until there are 16 digits
        Random random = new Random();
        while (tokenDigits.size() < 16) {
            int randomIndex = random.nextInt(digits.size());
            int digit = digits.get(randomIndex);
            tokenDigits.add(digit);
        }

        // Shuffle the token digits to create a random order
        Collections.shuffle(tokenDigits, random);

        // Convert the selected digits to a token string
        StringBuilder tokenBuilder = new StringBuilder();
        for (int i = 0; i < tokenDigits.size(); i++) {
            tokenBuilder.append(tokenDigits.get(i));
            if ((i + 1) % 4 == 0 && i < tokenDigits.size() - 1) {
                tokenBuilder.append('-');
            }
        }

        String formattedToken = tokenBuilder.toString();
        System.out.println(formattedToken);
        return formattedToken;
    }
}
