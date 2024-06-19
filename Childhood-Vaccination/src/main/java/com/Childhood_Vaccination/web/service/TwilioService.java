package com.Childhood_Vaccination.web.service;


import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


@Service
public class TwilioService {

	@Value("${twilio.account.sid}")
	private String accountSid;

	@Value("${twilio.auth.token}")
	private String authToken;

	@Value("${twilio.from.whatsapp}")
	private String fromWhatsAppNumber;

	@PostConstruct
	public void init() {
		Twilio.init(accountSid, authToken);
	}

	public void sendWhatsAppMessage(String to, String message) {
		Message.creator(
						new com.twilio.type.PhoneNumber("whatsapp:" + to),
						new com.twilio.type.PhoneNumber("whatsapp:" + fromWhatsAppNumber),
						message)
				.create();
	}
}