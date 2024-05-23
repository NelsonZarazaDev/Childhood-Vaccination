package com.Childhood_Vaccination.web.controller;


import com.Childhood_Vaccination.web.dto.AuthResponse;
import com.Childhood_Vaccination.web.dto.LoginChildRequest;
import com.Childhood_Vaccination.web.dto.LoginRequest;
import com.Childhood_Vaccination.web.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
	private final AuthService authService;

	@PostMapping(value = "login")
	public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request){
		return ResponseEntity.ok(authService.login(request));
	}

	@PostMapping(value = "loginChild")
	public ResponseEntity<AuthResponse> loginChild(@Valid @RequestBody LoginChildRequest request){
		return ResponseEntity.ok(authService.loginChild(request));
	}
}
