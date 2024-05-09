package com.Childhood_Vaccination.web.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

@Document(collection = "vaccinator")
@Data
@Builder
@AllArgsConstructor
public class Vaccinator implements UserDetails {
	@Id
	@Builder.Default
	private String id = new ObjectId().toString();

	@NotNull(message = "Nombres son requerido")
	@Size(max = 255,message = "firstname max 255 characters")
	private String first_name;

	@NotNull(message = "Apellidos son requerido")
	@Size(max = 255,message = "lastname max 255 characters")
	private String last_names;

	@NotNull(message = "documento es requerido")
	@Size(max = 10, message = "document debe ser de 10")
	private String document;

	@NotNull(message = "rol es requerido")
	private String role;

	@NotNull(message = "email is required")
	@Email(message = "email not valid")
	private String email;

	@NotNull(message = "password is required")
	@Size(min = 8, message = "password min 8 characters")
	private String password;

	@Size(max = 10, message = "phone de 10 characters")
	@NotNull(message = "telefono no null")
	private String phone;

	@Future(message = "la fecha debe ser igual o mayor a la actual")
	@NotNull(message = "Fecha de nacimiento no bull")
	private LocalDate start_date;

	@Past(message = "la fecha debe ser igual o menor a la actual")
	@NotNull(message = "fecha de nacimiento no null")
	private LocalDate date_birth;

	@NotNull(message = "estado no null")
	@Size(min = 6, max = 8, message = "estado invalido")
	private Boolean status;

	@NotNull(message = "sexo no null")
	@Size(max = 1)
	private String sex;

	@NotNull(message = "city no null")
	private String city;

	@NotNull(message = "departamento no null")
	private String department;

	@JsonIgnore
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return List.of();
	}

	@JsonIgnore
	@Override
	public String getUsername() {
		return this.id;
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
