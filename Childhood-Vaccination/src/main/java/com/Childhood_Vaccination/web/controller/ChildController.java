package com.Childhood_Vaccination.web.controller;

import com.Childhood_Vaccination.web.model.Child;
import com.Childhood_Vaccination.web.model.Vaccine;
import com.Childhood_Vaccination.web.service.ChildService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController

public class ChildController {
	@Autowired
	private ChildService childService;

	/*Leer*/
	@GetMapping("child/{id}")
	public ResponseEntity<Child> getChildById( @PathVariable String id){
		return ResponseEntity.ok(childService.getChildById(id));
	}

	/*Leer Vacuna*/
	@GetMapping("vaccine/{id}/{idV}")
	public ResponseEntity<Vaccine> getVaccineById(@PathVariable String id,@PathVariable String idV){
		return ResponseEntity.ok(childService.getVaccineById(id, idV));
	}

	/*Crear*/
	@PostMapping("child")
	public ResponseEntity<Child> createChild(@Valid @RequestBody Child child){
		return new ResponseEntity<>(childService.createChild(child), HttpStatus.CREATED);
	}

	/*Update*/
	@PutMapping("child/{id}/{idV}")
	public ResponseEntity<Vaccine> updateChildVaccine(@PathVariable String id,@PathVariable String idV, @RequestBody Vaccine updatedVaccine){
		return new ResponseEntity<>(childService.updateChildVaccine(id, idV, updatedVaccine), HttpStatus.OK);
	}

	/*Cantidad vacunas*/
	@GetMapping("/count")
	public Map<String, Integer> getVaccineApplicationCount() {
		return childService.getVaccineApplicationCount();
	}

	/*Los  que  se pasaron*/
	@GetMapping("/unvaccinatedList")
	 public ResponseEntity<List<Child>> getChildrenWithPastOrEmptyNextAppointmentDate() {
        List<Child> children = childService.getChildrenWithPastOrEmptyNextAppointmentDate();
        return ResponseEntity.ok(children);
    }

}
