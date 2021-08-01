package io.agileintelligence.fullstackhateoas_backend.domain.service;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityDevice;
import io.agileintelligence.fullstackhateoas_backend.domain.repository.RepositoryDevice;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ServiceTest {
    private RepositoryDevice repository;

    public ServiceTest(RepositoryDevice repository) {
        this.repository = repository;
    }

    public List<EntityDevice> getAllitems() {

        return repository.findAll();
    }

    public EntityDevice FindByCap(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public EntityDevice saveCap(EntityDevice capability) {
        return this.repository.save(capability);
    }



}
