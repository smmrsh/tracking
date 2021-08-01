package io.agileintelligence.fullstackhateoas_backend.domain.service;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityTraffic;
import io.agileintelligence.fullstackhateoas_backend.domain.repository.RepositoryTraffic;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ServiceTraffic {
    private RepositoryTraffic repository;

    public ServiceTraffic(RepositoryTraffic repository) {
        this.repository = repository;
    }

    public List<EntityTraffic> getAll() {

        return repository.findAll();
    }

    public EntityTraffic FindByItem(Long id) {
        return repository.findById(id).orElseThrow();
    }


    public EntityTraffic saveItem(EntityTraffic transmit) {
        return this.repository.save(transmit);
    }






}
