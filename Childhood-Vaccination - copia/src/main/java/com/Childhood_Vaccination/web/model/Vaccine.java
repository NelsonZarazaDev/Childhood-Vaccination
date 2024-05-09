package com.Childhood_Vaccination.web.model;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.time.LocalDate;
import java.util.List;


@Data
public class Vaccine {
	@Id
	private String id = new ObjectId().toString();
	@NotNull(message = "age is required")
	private String age;
	@NotNull(message = "nombre vacuna is required")
	private String vaccineName;
	@NotNull(message = "dosis is required")
	private String dose;


	private String laboratory;


	@Future
	private LocalDate applicationDate;


	private String lotNumber;


	@Future
	private LocalDate nextAppointmentDate;


	@DBRef
	private List<Vaccinator> vaccinators;
}
