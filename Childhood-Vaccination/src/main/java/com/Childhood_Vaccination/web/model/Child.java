package com.Childhood_Vaccination.web.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Document(collection = "child")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Child {
	@Id
	private String document;
	private String first_name;
	private String last_name;
	private String sex;
	private String blood_group;
	private String birth_weight;
	private String address;
	private LocalDate birth_date;
	private String city_birth;
	private String birth_department;

	private String parents_mother_name;
	private String parents_mother_last_name;
	private String parents_father_name;
	private String parents_father_last_name;
	private String parents_responsible;
	private String parents_document_mother;
	private String parents_document_father;
	private String parents_phone_mother;
	private String parents_phone_father;
	private String parents_email_mother;
	private String parents_email_father;
	private List<Vaccine> vaccines;

}
