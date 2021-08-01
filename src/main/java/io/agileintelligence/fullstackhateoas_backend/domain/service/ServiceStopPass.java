package io.agileintelligence.fullstackhateoas_backend.domain.service;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityStopPass;
import io.agileintelligence.fullstackhateoas_backend.domain.repository.RepositoryStopPass;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ServiceStopPass {
    private RepositoryStopPass repository;

    public ServiceStopPass(RepositoryStopPass repository) {
        this.repository = repository;
    }

    public List<EntityStopPass> getAll() {

        return repository.findAll();
    }

    public EntityStopPass FindByItem(Long id) {
        return repository.findById(id).orElseThrow();
    }


    public EntityStopPass saveItem(EntityStopPass transmit) {
        return this.repository.save(transmit);
    }






}
