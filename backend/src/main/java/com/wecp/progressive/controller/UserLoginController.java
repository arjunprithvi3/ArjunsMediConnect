package com.wecp.progressive.controller;

import com.wecp.progressive.dto.LoginRequest;
import com.wecp.progressive.dto.LoginResponse;
import com.wecp.progressive.dto.UserRegistrationDTO;
import com.wecp.progressive.entity.User;
import com.wecp.progressive.jwt.JwtUtil;
import com.wecp.progressive.service.impl.UserLoginServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.authentication.AuthenticationManager;

public class UserLoginController {
    @Autowired
    private UserLoginServiceImpl userLoginServiceImpl;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    // public ResponseEntity<User> registerUser(UserRegistrationDTO registrationDTO)
    // {
    // userLoginServiceImpl.registerUser(registrationDTO);
    // return new ResponseEntity<>(, HttpStatus.CREATED);
    // // return null;
    // }

    public ResponseEntity<?> registerUser(UserRegistrationDTO registrationDTO) {
        try {
            userLoginServiceImpl.registerUser(registrationDTO);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<LoginResponse> loginUser(LoginRequest loginRequest) {
        // Authentication authentication = authenticationManager.authenticate(
        //         new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        // String token = jwtUtil.generateToken(loginRequest.getUsername());
        // try {
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        String token = jwtUtil.generateToken(loginRequest.getUsername());
            User user = userLoginServiceImpl.getUserByUsername(loginRequest.getUsername());

            Integer studentId = null;
            Integer teacherId = null;

            if (user.getRole().equals("PATIENT") && user.getPatient() != null) {
                studentId = user.getPatient().getPatientId();
            }

            else if (user.getRole().equals("DOCTOR") && user.getDoctor() != null) {
                teacherId = user.getDoctor().getDoctorId();
            }

            LoginResponse loginResponse = new LoginResponse(token, user.getRole(), user.getUserId(), studentId,
                    teacherId);
            return new ResponseEntity<>(loginResponse, HttpStatus.OK);
        // } 
        // catch (Exception e) {
        //     return null;
        // }
    }

    public ResponseEntity<?> getUserDetails(int userId) {
        try {
            User user = userLoginServiceImpl.getUserDetails(userId);
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}