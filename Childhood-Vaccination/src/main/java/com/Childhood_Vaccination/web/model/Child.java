package com.Childhood_Vaccination.web.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.*;

@Document(collection = "child")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Child implements UserDetails {
	@Id
	@NotBlank(message = "El documento del niño es requerido")
	private String document;

	@NotBlank(message = "Los nombres del niño son requerido")
	@Size(max = 80,message = "El nombre del niño es demasiado largo")
	private String first_name;

	@NotBlank(message = "Los apellidos del niño son requeridos")
	@Size(max = 80,message = "Los apellidos del niño es demasiado largo")
	private String last_name;

	@NotBlank(message = "El sexo del niño es requerido")
	@Size(max = 1, message = "El sexo del niño es demasiado largo")
	private String sex;

	@NotBlank(message = "La direccion del niño es requerida")
	@Size(max = 50,message = "La dirección no puede tener más de 50 caracteres")
	private String address;

	@NotNull(message = "La fecha de nacimiento del niño es requerida")
	@Past(message = "La fecha de nacimiento del niño debe ser igual o menor a la actual")
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date birth_date;

	@NotBlank(message = "La ciudad del niño es requerida")
	@Size(max = 250,message = "La ciudad del niño es demasiado largo")
	private String city_birth;

	@NotBlank(message = "El departamento del niño es requerido")
	@Size(max = 250,message = "El departamento del niño es demasiado largo")
	private String birth_department;



	@NotBlank(message = "Los nombres de la madre son requeridos")
	@Size(max = 80,message = "El nombre de la madre es demasiado largo")
	private String parents_mother_name;

	@NotBlank(message = "Los apellidos de la madre son requeridos")
	@Size(max = 80,message = "El apellido de la madre es demasiado largo")
	private String parents_mother_last_name;

	@NotBlank(message = "Los nombres del padre son requeridos")
	@Size(max = 80,message = "El nombre del  padre es demasiado largo")
	private String parents_father_name;

	@NotBlank(message = "Los apellidos del padre son requeridos")
	@Size(max = 80,message = "El apellido del padre es demasiado largo")
	private String parents_father_last_name;

	@NotBlank(message = "El campo 'responsable' es obligatorio")
	@Size(max = 150,message = "El campo 'responsable' no puede tener más de 150 caracteres")
	private String parents_responsible;

	@NotBlank(message = "El documento de identidad de la madre es requerido")
	@Size(min = 8, max = 10, message = "El documento de la madre debe tener entre 8 y 10 caracteres")
	private String parents_document_mother;

	@NotBlank(message = "El documento de identidad del padre es requerido")
	@Size(min = 8, max = 10, message = "El documento del padre debe tener entre 8 y 10 caracteres")
	private String parents_document_father;

	@NotBlank(message = "El teléfono de la madre es requerido")
	@Size(max = 10, message = "El teléfono de la madre debe tener máximo 10 caracteres")
	private String parents_phone_mother;

	@NotBlank(message = "El teléfono del padre es requerido")
	@Size(max = 10, message = "El teléfono del padre debe tener máximo 10 caracteres")
	private String parents_phone_father;

	@NotBlank(message = "El correo electrónico de la madre es obligatorio")
	@Email(message = "El correo electrónico de la madre no es válido")
	private String parents_email_mother;

	@NotBlank(message = "El correo electrónico del padre es obligatorio")
	@Email(message = "El correo electrónico del padre no es válido")
	private String parents_email_father;

	private List<Vaccine> vaccines;

	@JsonIgnore
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return List.of();
	}

	@JsonIgnore
	@Override
	public String getPassword() {
		return "";
	}

	@JsonIgnore
	@Override
	public String getUsername() {
		return this.document;
	}

	@JsonIgnore
	@Override
	public boolean isAccountNonExpired() {
		return false;
	}

	@JsonIgnore
	@Override
	public boolean isAccountNonLocked() {
		return false;
	}

	@JsonIgnore
	@Override
	public boolean isCredentialsNonExpired() {
		return false;
	}

	@JsonIgnore
	@Override
	public boolean isEnabled() {
		return false;
	}
}