package com.Childhood_Vaccination.web.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;
import java.util.Date;


@Data
public class Vaccine {
	@Id
	private String id = new ObjectId().toString();
	private String age;
	private String vaccineName;
	private String dose;
	private String laboratory;
	private LocalDate applicationDate;
	private String lotNumber;
	private LocalDate nextAppointmentDate;


	//@DBRef
//private List<Vaccinator> vaccinators;
}
