package com.Childhood_Vaccination.web.service;

import com.Childhood_Vaccination.web.exception.NotFoundException;
import com.Childhood_Vaccination.web.model.Child;
import com.Childhood_Vaccination.web.model.Vaccinator;
import com.Childhood_Vaccination.web.model.Vaccine;
import com.Childhood_Vaccination.web.repository.VaccinatorRepository;
import com.Childhood_Vaccination.web.util.Constants;
import org.apache.tomcat.util.bcel.Const;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class VaccinatorService {
	@Autowired
	private VaccinatorRepository vaccinatorRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;


	/*Crear Vaccinator*/
	public Vaccinator createVaccinator (Vaccinator vaccinatorReq){
		vaccinatorReq.setPassword(passwordEncoder.encode(vaccinatorReq.getPassword()));
		return vaccinatorRepository.save(vaccinatorReq);
	}

	/*Leer*/
	public Vaccinator getVaccineById(String id){
		Optional<Vaccinator> vaccinator = vaccinatorRepository.findById(id);
	if (vaccinator.isEmpty()){
			throw new NotFoundException(Constants.ADDRESS_NOT_FOUND.getMessage());
		}
		return vaccinator.get();
	}

	/*Actualizar*/
	public Vaccinator updateVaccinator(Vaccinator vaccinatorReq, String id){
		Optional<Vaccinator> vaccinatorBd= vaccinatorRepository.findById(id);
		vaccinatorBd.get().setEmail(vaccinatorReq.getEmail());
		vaccinatorBd.get().setPhone(vaccinatorReq.getPhone());
		vaccinatorBd.get().setRole(vaccinatorReq.getRole());
		vaccinatorBd.get().setStatus(vaccinatorReq.getStatus());
		return vaccinatorRepository.save(vaccinatorBd.get());
	}
	
	/*Listar todo*/
	public List<Vaccinator> findAllVaccinator(){
		return (List<Vaccinator>) vaccinatorRepository.findAll();
	}
}
