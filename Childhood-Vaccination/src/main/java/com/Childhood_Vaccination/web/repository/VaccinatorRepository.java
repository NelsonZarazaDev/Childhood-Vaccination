package com.Childhood_Vaccination.web.repository;

import com.Childhood_Vaccination.web.model.Vaccinator;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VaccinatorRepository extends MongoRepository<Vaccinator,String> {
	Optional<Vaccinator> findByEmail(String email);
}
