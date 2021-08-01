package io.agileintelligence.fullstackhateoas_backend.domain.service;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityTransmit;
import io.agileintelligence.fullstackhateoas_backend.domain.repository.RepositoryTransmit;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ServiceTransmit {
    private RepositoryTransmit repository;

    public ServiceTransmit(RepositoryTransmit repository) {
        this.repository = repository;
    }

    public List<EntityTransmit> getAll() {

        return repository.findAll();
    }

    public EntityTransmit FindByItem(Long id) {
        return repository.findById(id).orElseThrow();
    }


    public EntityTransmit saveItem(EntityTransmit transmit) {
        return this.repository.save(transmit);
    }






}
