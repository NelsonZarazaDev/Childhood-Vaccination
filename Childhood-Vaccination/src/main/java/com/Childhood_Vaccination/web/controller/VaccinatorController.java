package com.Childhood_Vaccination.web.controller;


import com.Childhood_Vaccination.web.model.Vaccinator;
import com.Childhood_Vaccination.web.service.VaccinatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VaccinatorController {
	@Autowired
	private VaccinatorService vaccinatorService;

	/*Crear*/
	@PostMapping("vaccinator")
	public ResponseEntity<Vaccinator> createVaccinator(@RequestBody Vaccinator vaccinator){
		return new ResponseEntity<>(vaccinatorService.createVaccinator(vaccinator), HttpStatus.CREATED);
	}

	/*Leer*/
	@GetMapping("vaccinator/{id}")
	public ResponseEntity<Vaccinator> getVaccinator(@PathVariable String id){
		return ResponseEntity.ok(vaccinatorService.getVaccineById(id));
	}

	/*Actualizar*/
	@PutMapping("vaccinator/{id}")
	public ResponseEntity<Vaccinator> updateVaccinator(@RequestBody Vaccinator vaccinator, @PathVariable String id){
		return new ResponseEntity<>(vaccinatorService.updateVaccinator(vaccinator,id),HttpStatus.OK);
	}

	/*Listar todo*/
	@GetMapping("vaccinator")
	public ResponseEntity<List<Vaccinator>> findAll(){
		return ResponseEntity.ok(vaccinatorService.findAllVaccinator());
	}

}
