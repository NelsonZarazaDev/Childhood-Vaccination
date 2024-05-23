package com.Childhood_Vaccination.web.util;

import lombok.Getter;

@Getter
public enum Constants {
	NOT_EXIST("El usuario no existe"),
	CATEGORIA_NOT_FOUND("User not found"),
	CATEGORIA_IS_NULL("User is null"),
	ARTICULO_NOT_FOUND("Address not found"),
	USER_NOT_FOUND("User not found"),
	USER_IS_NULL("User is null"),
	ADDRESS_NOT_FOUND("Address not found"),
	CREDENTIAL_INVALID("Credenciales invalidas!!"),
	USER_EMAIL_EXISTS("El correo electrónico ya está registrado."),
	CHILD_DOCUMENT_EXISTS("El documento ya está registrado.");

	private final String message;
	Constants(String s) {
		this.message = s;
	}
}
