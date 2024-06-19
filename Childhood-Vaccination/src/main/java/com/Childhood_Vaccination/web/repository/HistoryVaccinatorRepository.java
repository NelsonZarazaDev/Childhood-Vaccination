package com.Childhood_Vaccination.web.repository;

import com.Childhood_Vaccination.web.model.HistoryVaccinator;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HistoryVaccinatorRepository extends MongoRepository<HistoryVaccinator,String> {
	Optional<HistoryVaccinator> findByEmail(String email);
}
