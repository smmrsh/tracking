package io.agileintelligence.fullstackhateoas_backend.domain.service;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityDriver;
import io.agileintelligence.fullstackhateoas_backend.domain.repository.RepositoryDriver;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ServiceDriver {
    private RepositoryDriver repository;

    public ServiceDriver(RepositoryDriver repository) {
        this.repository = repository;
    }

    public List<EntityDriver> getAllCapability() {

        return repository.findAll();
    }

    public EntityDriver FindByCap(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public EntityDriver saveCap(EntityDriver capability) {
        return this.repository.save(capability);
    }



}
