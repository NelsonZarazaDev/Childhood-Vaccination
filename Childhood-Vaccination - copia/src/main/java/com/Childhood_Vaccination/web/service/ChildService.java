package com.Childhood_Vaccination.web.service;

import com.Childhood_Vaccination.web.model.Child;
import com.Childhood_Vaccination.web.model.Vaccine;
import com.Childhood_Vaccination.web.repository.ChildRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChildService {
	@Autowired
	private ChildRepository childRepository;

	/*Create child*/
	public Child createChild(Child childReq) {
		return childRepository.save(childReq);
	}

	/*Read child*/
	public Child getChildById(String id) {
		Optional<Child> child = childRepository.findById(id);
		return child.get();
	}

	/*Update child*/
	public Vaccine updateChildVaccine(String childId, String vaccineId, Vaccine updatedVaccine) {
		Optional<Child> optionalChild = childRepository.findById(childId);
			Child child = optionalChild.get();
			List<Vaccine> vaccines = child.getVaccines();
			for (Vaccine vaccine : vaccines) {
				if (vaccine.getId().equals(vaccineId)) {
					vaccine.setLaboratory(updatedVaccine.getLaboratory());
					vaccine.setLotNumber(updatedVaccine.getLotNumber());
					vaccine.setNextAppointmentDate(updatedVaccine.getNextAppointmentDate());
					childRepository.save(child);
					return vaccine;
				}
			}
		return null;
	}
}