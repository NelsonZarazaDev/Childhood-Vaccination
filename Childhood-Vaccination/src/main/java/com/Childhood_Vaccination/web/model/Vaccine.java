package com.Childhood_Vaccination.web.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Map;


@Data
public class Vaccine {
	@Id
	private String id = new ObjectId().toString();
	private String age;
	private String vaccineName;
	private String dose;
	private Boolean status = false;

	@Size(max = 50, message = "El nombre del laboratorio es demasiado largo")
	private String laboratory;

	@JsonFormat(pattern="yyyy-MM-dd")
	private String applicationDate;

	private String appliedTime;

	private String lotNumber;

	@NotNull(message = "La fecha de la proxima cita es requerida")
	@JsonFormat(pattern="yyyy-MM-dd")
	private String nextAppointmentDate;

	private int num_applied;

	@DBRef
	private Vaccinator vaccinator;
}
