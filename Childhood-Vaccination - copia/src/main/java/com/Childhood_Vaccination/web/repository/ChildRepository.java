package com.Childhood_Vaccination.web.repository;

import com.Childhood_Vaccination.web.model.Child;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ChildRepository extends MongoRepository<Child,String> {
	Optional<Child> findById(String document);
}

