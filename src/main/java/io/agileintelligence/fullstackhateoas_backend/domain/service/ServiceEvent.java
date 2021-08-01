package io.agileintelligence.fullstackhateoas_backend.domain.service;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityEvent;
import io.agileintelligence.fullstackhateoas_backend.domain.repository.RepositoryEvent;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ServiceEvent {
    private RepositoryEvent repository;

    public ServiceEvent(RepositoryEvent repository) {
        this.repository = repository;
    }

    public List<EntityEvent> getAll() {

        return repository.findAll();
    }

    public EntityEvent FindByItem(Long id) {
        return repository.findById(id).orElseThrow();
    }


    public EntityEvent saveItem(EntityEvent transmit) {
        return this.repository.save(transmit);
    }






}
