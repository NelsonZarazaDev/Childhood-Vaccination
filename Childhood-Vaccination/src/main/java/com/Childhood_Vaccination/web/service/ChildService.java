package com.Childhood_Vaccination.web.service;

import com.Childhood_Vaccination.web.exception.AlreadyExistsException;
import com.Childhood_Vaccination.web.model.Child;
import com.Childhood_Vaccination.web.model.Vaccinator;
import com.Childhood_Vaccination.web.model.Vaccine;
import com.Childhood_Vaccination.web.repository.ChildRepository;
import com.Childhood_Vaccination.web.util.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ChildService {
	@Autowired
	private ChildRepository childRepository;

	@Autowired
	private TwilioService twilioService;

	/*Create child*/
	public Child createChild(Child childReq) {
		Optional<Child> childBd = childRepository.findById(childReq.getDocument());
		if (childBd.isPresent()) {
			throw new AlreadyExistsException(Constants.CHILD_DOCUMENT_EXISTS.getMessage());
		}
		return childRepository.save(childReq);
	}

	/*Read child*/
	public Child getChildById(String id) {
		Optional<Child> child = childRepository.findById(id);
		return child.get();
	}

	/*Read Vaccine*/
	public Vaccine getVaccineById(String childId, String vaccineId) {
		Optional<Child> optionalChild = childRepository.findById(childId);
		Child child = optionalChild.get();
		List<Vaccine> vaccines = child.getVaccines();
		for (Vaccine vaccine : vaccines) {
			if (vaccine.getId().equals(vaccineId)) {
				return vaccine;
			}
		}
		return null;
	}

	/*Update Vaccine*/
	public Vaccine updateChildVaccine(String childId, String vaccineId, Vaccine updatedVaccine) {
		Optional<Child> optionalChild = childRepository.findById(childId);
			Child child = optionalChild.get();
			List<Vaccine> vaccines = child.getVaccines();
			for (Vaccine vaccine : vaccines) {
				if (vaccine.getId().equals(vaccineId)) {
					vaccine.setLaboratory(updatedVaccine.getLaboratory());
					vaccine.setLotNumber(updatedVaccine.getLotNumber());
					vaccine.setApplicationDate(updatedVaccine.getApplicationDate());
					vaccine.setAppliedTime(updatedVaccine.getAppliedTime());
					vaccine.setNextAppointmentDate(updatedVaccine.getNextAppointmentDate());
					child.setDateNextAppointmentDate(updatedVaccine.getNextAppointmentDate());
					vaccine.setStatus(true);
					child.setNumVacunas(child.getNumVacunas()+1);
					vaccine.setVaccinator(updatedVaccine.getVaccinator());
					childRepository.save(child);
					return vaccine;
				}
			}
		return null;
	}

	public Map<String, Integer> getVaccineApplicationCount() {
		Map<String, Integer> vaccineCountMap = new HashMap<>();

		for (Child child : childRepository.findAll()) {
			for (Vaccine vaccine : child.getVaccines()) {
				String vaccineName = vaccine.getVaccineName();
				vaccineCountMap.put(vaccineName, vaccineCountMap.getOrDefault(vaccineName, 0) + 1);
			}
		}

		return vaccineCountMap;
	}


	/*Traer los que se pasaron*/
	public List<Child> getChildrenWithPastOrEmptyNextAppointmentDate() {
		LocalDate currentDate = LocalDate.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

		List<Child> children = childRepository.findAll();
		List<Child> childrenWithPastAppointment = children.stream()
				.filter(child -> {
					String dateStr = child.getDateNextAppointmentDate();
					if (dateStr == null || dateStr.isBlank()) {
						return false;  // No incluir si la fecha está vacía
					}
					try {
						LocalDate appointmentDate = LocalDate.parse(dateStr, formatter);
						return appointmentDate.isBefore(currentDate);
					} catch (DateTimeParseException e) {
						return false;  // Ignorar fechas mal formateadas
					}
				})
				.collect(Collectors.toList());

		sendWhatsAppToNextAppointmentChildren(childrenWithPastAppointment);
		return childrenWithPastAppointment;
	}

	private void sendWhatsAppToNextAppointmentChildren(List<Child> children) {
		LocalDate today = LocalDate.now();
		String todayStr = today.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));

		List<String> phoneNumbers = children.stream()
				.map(Child::getParents_phone_mother)
				.collect(Collectors.toList());

		String message = "Recordatorio: Tienes una cita de vacunación hoy. Por favor, asiste puntualmente.";

		for (String phoneNumber : phoneNumbers) {
			twilioService.sendWhatsAppMessage(phoneNumber, message);
		}
	}
}