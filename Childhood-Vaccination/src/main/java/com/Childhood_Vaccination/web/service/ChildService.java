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

import java.util.*;

@Service
public class ChildService {
	@Autowired
	private ChildRepository childRepository;

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
					vaccine.setNextAppointmentDate(updatedVaccine.getNextAppointmentDate());
					vaccine.setStatus(true);
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
}