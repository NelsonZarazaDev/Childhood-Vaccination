package com.Childhood_Vaccination.web.service;

import com.Childhood_Vaccination.web.exception.AlreadyExistsException;
import com.Childhood_Vaccination.web.model.Child;
import com.Childhood_Vaccination.web.model.Vaccinator;
import com.Childhood_Vaccination.web.repository.VaccinatorRepository;
import com.Childhood_Vaccination.web.util.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VaccinatorService {
	@Autowired
	private VaccinatorRepository vaccinatorRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;


	/*Crear Vaccinator*/
	public Vaccinator createVaccinator (Vaccinator vaccinatorReq){
		Optional<Vaccinator> existingUserByEmail = vaccinatorRepository.findByEmail(vaccinatorReq.getEmail());
		if (existingUserByEmail.isPresent()) {
			throw new AlreadyExistsException(Constants.USER_EMAIL_EXISTS.getMessage());
		}
		Optional<Vaccinator> vaccinatorDocument = vaccinatorRepository.findById(vaccinatorReq.getDocument());
		if (vaccinatorDocument.isPresent()) {
			throw new AlreadyExistsException(Constants.CHILD_DOCUMENT_EXISTS.getMessage());
		}
		vaccinatorReq.setPassword(passwordEncoder.encode(vaccinatorReq.getPassword()));
		return vaccinatorRepository.save(vaccinatorReq);
	}

	/*Leer*/
	public Vaccinator getVaccineById(String id) {
		Optional<Vaccinator> vaccinator = vaccinatorRepository.findById(id);
		return vaccinator.get();
	}

	/*Actualizar*/
	public Vaccinator updateVaccinator(Vaccinator vaccinatorReq, String id){
		Optional<Vaccinator> vaccinatorBd= vaccinatorRepository.findById(id);
		Optional<Vaccinator> existingUserByEmail = vaccinatorRepository.findByEmail(vaccinatorReq.getEmail());
		if (existingUserByEmail.isPresent()) {
			throw new AlreadyExistsException(Constants.USER_EMAIL_EXISTS.getMessage());
		}
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
