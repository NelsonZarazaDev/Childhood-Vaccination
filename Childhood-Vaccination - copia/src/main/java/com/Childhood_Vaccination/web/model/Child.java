package com.Childhood_Vaccination.web.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

@Document(collection = "child")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Child implements UserDetails {
	@Id
	private String document;

	@NotNull(message = "firstname is required")
	@Size(max = 255,message = "firstname max 255 characters")
	private String first_name;

	@NotNull(message = "lastname is required")
	@Size(max = 255,message = "lastname max 255 characters")
	private String last_name;

	@NotNull(message = "sexo no null")
	@Size(max = 1)
	private String sex;

	@NotNull(message = "direccion is required")
	@Size(max = 50,message = "direccion max 50 characters")
	private String address;

	@Past(message = "la fecha debe ser igual o menor a la actual")
	@NotNull(message = "fecha de nacimiento no null")
	private LocalDate birth_date;

	@NotNull(message = "city no null")
	private String city_birth;

	@NotNull(message = "department no null")
	private String birth_department;



	@NotNull(message = "firstname madre is required")
	@Size(max = 255,message = "firstname madre max 255 characters")
	private String parents_mother_name;

	@NotNull(message = "apellidos madre is required")
	@Size(max = 255,message = "apellidos madre max 255 characters")
	private String parents_mother_last_name;

	@NotNull(message = "firstname padre is required")
	@Size(max = 255,message = "firstname padre max 255 characters")
	private String parents_father_name;

	@NotNull(message = "appelidos padre is required")
	@Size(max = 255,message = "appelidos padre max 255 characters")
	private String parents_father_last_name;

	@NotNull(message = "responsable  is required")
	@Size(max = 255,message = "responsable max 255 characters")
	private String parents_responsible;

	@NotNull(message = "document madre is required")
	@Size(min = 8, max = 10, message = "document madre min 8 characters and max 10")
	private String parents_document_mother;

	@NotNull(message = "document padre is required")
	@Size(min = 8, max = 10, message = "document padre min 8 characters and max 10")
	private String parents_document_father;

	@Size(max = 10, message = "phone madre de 10 characters")
	@NotNull(message = "telefono madre no null")
	private String parents_phone_mother;

	@Size(max = 10, message = "phone padre de 10 characters")
	@NotNull(message = "telefono padre no null")
	private String parents_phone_father;

	@NotNull(message = "email madre is required")
	@Email(message = "email madre not valid")
	private String parents_email_mother;

	@NotNull(message = "email padre is required")
	@Email(message = "email padre not valid")
	private String parents_email_father;

	@NotNull(message = "rol es requerido")
	private String role="Usuario";

	@DBRef
	private Vaccinator vaccinator;

	private List<Vaccine> vaccines;




	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return List.of();
	}

	@Override
	public String getPassword() {
		return "";
	}

	@Override
	public String getUsername() {
		return this.document;
	}

	@Override
	public boolean isAccountNonExpired() {
		return false;
	}

	@Override
	public boolean isAccountNonLocked() {
		return false;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return false;
	}

	@Override
	public boolean isEnabled() {
		return false;
	}
}
