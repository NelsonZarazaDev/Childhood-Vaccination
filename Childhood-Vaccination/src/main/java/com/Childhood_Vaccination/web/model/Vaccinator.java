package com.Childhood_Vaccination.web.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Document(collection = "vaccinator")
@Data
@Builder
@AllArgsConstructor
public class Vaccinator implements UserDetails {
	@Id
	@NotBlank(message = "El documento es requerido")
	private String document;

	@NotBlank(message = "Los nombres son requeridos")
	@Size(max = 80,message = "El nombre es demasiado largo")
	private String first_name;

	@NotBlank(message = "Los apellidos son requeridos")
	@Size(max = 80,message = "El apellido es demasiado largo")
	private String last_names;


	@NotBlank(message = "El rol es requerido")
	@Size(max = 50,message = "El rol es demasiado largo")
	private String role;

	@NotBlank(message = "El correo electrónico es obligatorio")
	@Email(message = "El correo electrónico no es válido")
	private String email;
	
	@NotNull(message = "La contraseña es requerida")
	@Size(min = 8, message = "password min 8 characters")
	private String password;

	@NotBlank(message = "El teléfono es requerido")
	@Size(min = 10, max=10, message = "El teléfono debe tener máximo 10 caracteres")
	private String phone;

	@NotNull(message = "La Fecha de inicio es requerida")
	@Past(message = "La fecha de inicio debe ser menor o igual a la actual")
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date start_date;

	@NotNull(message = "La Fecha de nacimiento es requerida")
	@Past(message = "La fecha de nacimiento debe ser menor a la actual")
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date date_birth;

	private Boolean status = true;

	@NotBlank(message = "El sexo es requerido")
	@Size(max = 1,message = "El sexo es demasiado largo")
	private String sex;

	@NotBlank(message = "La ciudad es requerida")
	@Size(max = 250,message = "La ciudad es demasiado largo")
	private String city;

	@NotBlank(message = "El departamento es requerido")
	@Size(max = 250,message = "El departamento es demasiado largo")
	private String department;

	@JsonIgnore
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return List.of();
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
