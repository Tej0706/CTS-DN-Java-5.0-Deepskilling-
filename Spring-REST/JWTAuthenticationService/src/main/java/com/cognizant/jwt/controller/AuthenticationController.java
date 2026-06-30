package com.cognizant.jwt.controller;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.jwt.model.Token;
import com.cognizant.jwt.util.JwtUtil;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public Token authenticate(@RequestHeader("Authorization") String authHeader) {

        // Remove "Basic "
        String base64Credentials = authHeader.substring(6);

        // Decode Base64
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);

        String credentials = new String(decodedBytes, StandardCharsets.UTF_8);

        // Split username and password
        String[] values = credentials.split(":", 2);

        String username = values[0];

        // Generate JWT
        String token = JwtUtil.generateToken(username);

        return new Token(token);
    }
}