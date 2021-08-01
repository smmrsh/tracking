package io.agileintelligence.fullstackhateoas_backend.domain.service;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityRest;
import io.agileintelligence.fullstackhateoas_backend.domain.repository.RepositoryRest;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ServiceRest {
    private RepositoryRest repository;

    public ServiceRest(RepositoryRest repository) {
        this.repository = repository;
    }

    public List<EntityRest> getAll() {

        return repository.findAll();
    }

    public EntityRest FindByItem(Long id) {
        return repository.findById(id).orElseThrow();
    }


    public EntityRest saveItem(EntityRest transmit) {
        return this.repository.save(transmit);
    }






}
