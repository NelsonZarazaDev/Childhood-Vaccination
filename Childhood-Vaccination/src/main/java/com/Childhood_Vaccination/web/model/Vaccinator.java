package com.Childhood_Vaccination.web.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.Date;
import java.util.Locale;

@Document(collection = "vaccinator")
@Data
@AllArgsConstructor
public class Vaccinator {
	@Id
	private String id = new ObjectId().toString();
	private String first_name;
	private String last_names;
	private String document;
	private String email;
	private String password;
	private String phone;
	private String role;
	private LocalDate start_date;
	private LocalDate date_birth;
	private Boolean status;
	private String sex;
	private String city;
	private String department;

	//@DBRef
	//private List<Vaccine> vaccines;
}
