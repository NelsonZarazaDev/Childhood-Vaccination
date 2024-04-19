package com.Childhood_Vaccination.web.controller;

import com.Childhood_Vaccination.web.model.Child;
import com.Childhood_Vaccination.web.model.Vaccine;
import com.Childhood_Vaccination.web.repository.ChildRepository;
import com.Childhood_Vaccination.web.service.ChildService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
public class ChildController {
	@Autowired
	private ChildService childService;

	/*Leer*/
	@GetMapping("child/{id}")
	public ResponseEntity<Child> getChildById(@PathVariable String id){
		return ResponseEntity.ok(childService.getChildById(id));
	}

	/*Crear*/
	@PostMapping("child")
	public ResponseEntity<Child> createChild(@RequestBody Child child){
		return new ResponseEntity<>(childService.createChild(child), HttpStatus.CREATED);
	}

	/*Update*/
	@PutMapping("child/{id}/{idV}")
	public ResponseEntity<Vaccine> updateVaccine(@PathVariable String id,@PathVariable String idV, @RequestBody Vaccine updatedVaccine){
		return new ResponseEntity<>(childService.updateChildVaccine(id, idV, updatedVaccine), HttpStatus.OK);
	}
}
