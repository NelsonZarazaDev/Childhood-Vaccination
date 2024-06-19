package com.Childhood_Vaccination.web.service;

import com.Childhood_Vaccination.web.exception.AlreadyExistsException;
import com.Childhood_Vaccination.web.model.Child;
import com.Childhood_Vaccination.web.model.HistoryVaccinator;
import com.Childhood_Vaccination.web.model.Vaccinator;
import com.Childhood_Vaccination.web.repository.HistoryVaccinatorRepository;
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
	private HistoryVaccinatorRepository historyVaccinatorRepository;

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
		Vaccinator savedVaccinator = vaccinatorRepository.save(vaccinatorReq);

		// Crear una instancia de HistoryVaccinator con los datos del Vaccinator
		HistoryVaccinator historyVaccinator = HistoryVaccinator.builder()
				.document(savedVaccinator.getDocument())
				.first_name(savedVaccinator.getFirst_name())
				.last_names(savedVaccinator.getLast_names())
				.role(savedVaccinator.getRole())
				.email(savedVaccinator.getEmail())
				.password(savedVaccinator.getPassword()) // No es seguro guardar la contraseña en texto plano, considera eliminarla del historial
				.phone(savedVaccinator.getPhone())
				.start_date(/* asigna la fecha de inicio */ savedVaccinator.getStart_date())
				.date_birth(/* asigna la fecha de nacimiento */ savedVaccinator.getDate_birth())
				.status(/* asigna el estado */ true) // Puedes definir un valor por defecto aquí
				.sex(/* asigna el sexo */ savedVaccinator.getSex())
				.city_birth(/* asigna la ciudad de nacimiento */ savedVaccinator.getCity_birth())
				.birth_department(/* asigna el departamento de nacimiento */ savedVaccinator.getBirth_department())
				.build();

		// Guardar en el historial
		historyVaccinatorRepository.save(historyVaccinator);

		return savedVaccinator;
	}

	/*Leer*/
	public Vaccinator getVaccineById(String id) {
		Optional<Vaccinator> vaccinator = vaccinatorRepository.findById(id);
		return vaccinator.get();
	}

	/*Actualizar*/
	public Vaccinator updateVaccinator(Vaccinator vaccinatorReq, String id){
		Optional<Vaccinator> vaccinatorBd = vaccinatorRepository.findById(id);
		Optional<HistoryVaccinator> historyVaccinatorBd = historyVaccinatorRepository.findById(id);
		Vaccinator vaccinator = vaccinatorBd.get();

		if (vaccinator.getSchema() != 0) {
			historyVaccinatorBd.get().setEmail(vaccinator.getEmail());
			historyVaccinatorBd.get().setPhone(vaccinator.getPhone());
			historyVaccinatorBd.get().setStatus(vaccinator.getStatus());
			vaccinatorBd.get().setEmail(vaccinatorReq.getEmail());
			vaccinatorBd.get().setPhone(vaccinatorReq.getPhone());
			vaccinatorBd.get().setStatus(vaccinatorReq.getStatus());
			vaccinator.setSchema(vaccinator.getSchema()+1);
			historyVaccinatorRepository.save(historyVaccinatorBd.get());
			return vaccinatorRepository.save(vaccinatorBd.get());
		}
		vaccinatorBd.get().setEmail(vaccinatorReq.getEmail());
		vaccinatorBd.get().setPhone(vaccinatorReq.getPhone());
		vaccinatorBd.get().setStatus(vaccinatorReq.getStatus());
		vaccinator.setSchema(vaccinator.getSchema()+1);
		return vaccinatorRepository.save(vaccinatorBd.get());
	}


	/*Listar todo*/
	public List<Vaccinator> findAllVaccinator(){
		return (List<Vaccinator>) vaccinatorRepository.findAll();
	}
}
