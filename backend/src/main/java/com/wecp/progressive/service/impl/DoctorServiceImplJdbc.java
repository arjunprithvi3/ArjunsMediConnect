package com.wecp.progressive.service.impl;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import com.wecp.progressive.dao.DoctorDAO;
import com.wecp.progressive.entity.Doctor;
import com.wecp.progressive.service.DoctorService;

public class DoctorServiceImplJdbc implements DoctorService  {

    private DoctorDAO doctorDAO;

    public DoctorServiceImplJdbc(DoctorDAO doctorDAO){
        this.doctorDAO = doctorDAO;
    }

    @Override
    public Integer addDoctor(Doctor doctor) throws SQLException{
        // System.out.println("Inside the doctor service-1");
        return doctorDAO.addDoctor(doctor);
    }

    @Override
    public void deleteDoctor(int doctorId) throws Exception{
        // TODO Auto-generated method stub
        // DoctorService.super.deleteDoctor(doctorId);
        doctorDAO.deleteDoctor(doctorId);
       
        
    }

    @Override
    public void emptyArrayList() {
        // TODO Auto-generated method stub
        // DoctorService.super.emptyArrayList();
    }

    @Override
    public List<Doctor> getAllDoctors() throws SQLException{
        List<Doctor> list = new ArrayList<>();
        list = doctorDAO.getAllDoctors();
       
        return list;
    }

    @Override
    public Doctor getDoctorById(int doctorId) throws Exception{
        // TODO Auto-generated method stub
        // return DoctorService.super.getDoctorById(doctorId);
        Doctor doc = doctorDAO.getDoctorById(doctorId);
        return doc;
       
    }

    @Override
    public List<Doctor> getDoctorSortedByExperience() throws Exception{
        List<Doctor> doc = doctorDAO.getAllDoctors();
        doc.sort(Comparator.comparing(Doctor::getYearsOfExperience));
        return doc;
    }

    @Override
    public void updateDoctor(Doctor doctor) throws Exception{
        // TODO Auto-generated method stub
        // DoctorService.super.updateDoctor(doctor);
        doctorDAO.updateDoctor(doctor);
      
        
    }

}