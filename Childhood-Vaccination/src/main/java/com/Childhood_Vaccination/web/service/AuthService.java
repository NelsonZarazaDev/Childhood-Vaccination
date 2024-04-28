package com.Childhood_Vaccination.web.service;


import com.Childhood_Vaccination.web.dto.AuthResponse;
import com.Childhood_Vaccination.web.dto.LoginChildRequest;
import com.Childhood_Vaccination.web.dto.LoginRequest;
import com.Childhood_Vaccination.web.exception.AlreadyExistsException;
import com.Childhood_Vaccination.web.exception.NotFoundException;
import com.Childhood_Vaccination.web.model.Child;
import com.Childhood_Vaccination.web.model.Vaccinator;
import com.Childhood_Vaccination.web.repository.ChildRepository;
import com.Childhood_Vaccination.web.repository.VaccinatorRepository;
import com.Childhood_Vaccination.web.util.Constants;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class AuthService {

	private final VaccinatorRepository vaccinatorRepository;
	private final ChildRepository childRepository;
	private final PasswordEncoder passwordEncoder;
	private final JWTService jwtService;

	public AuthResponse register(@Valid Vaccinator request) {
		Optional<Vaccinator> vaccinatorBd = vaccinatorRepository.findById(request.getDocument());
		/*if (vaccinatorBd.isPresent()) {
			throw new AlreadyExistsException(Constants.USER_EMAIL_EXISTS.getMessage());
		}*/

		Vaccinator vaccinator = Vaccinator.builder()
				.last_names(request.getLast_names())
				.document(request.getDocument())
				.email(request.getEmail())
				.password(passwordEncoder.encode(request.getPassword()))
				.phone(request.getPhone())
				.start_date(request.getStart_date())
				.date_birth(request.getDate_birth())
				.status(request.getStatus())
				.sex(request.getSex())
				.city(request.getCity())
				.department(request.getDepartment())
				.build();

		vaccinatorRepository.save(vaccinator);
		return AuthResponse.builder().token(jwtService.getToken(vaccinator)).build();
	}


	public AuthResponse login(LoginRequest request) {
		Vaccinator vaccinator = vaccinatorRepository.findByEmail(request.getEmail())
				.orElseThrow(() -> new NotFoundException(Constants.CREDENTIAL_INVALID.getMessage()));

		if (vaccinator != null && passwordEncoder.matches(request.getPassword(), vaccinator.getPassword()) && vaccinator.getStatus()==true) {
			if (vaccinator.getStatus()) {
				String token = jwtService.getToken(vaccinator);
				return AuthResponse.builder().token(token).build();
			} else {
				throw new NotFoundException("El estado del vacunador es inactivo");
			}
		} else {
			throw new NotFoundException(Constants.CREDENTIAL_INVALID.getMessage());
		}
	}


	public AuthResponse loginChild(LoginChildRequest request) {
		Child child = childRepository.findById(request.getDocument())
				.orElseThrow(() -> new NotFoundException(Constants.CREDENTIAL_INVALID.getMessage()));

		if (child != null) {
			String token = jwtService.getToken(child);
			return AuthResponse.builder().token(token).build();
		} else {
			throw new NotFoundException(Constants.CREDENTIAL_INVALID.getMessage());
		}
	}
}

