package com.wecp.progressive.exception;

import java.sql.SQLException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class DoctorAlreadyExistsException extends RuntimeException {

    public DoctorAlreadyExistsException(String msg)
    {
        super(msg);
    }

   
}