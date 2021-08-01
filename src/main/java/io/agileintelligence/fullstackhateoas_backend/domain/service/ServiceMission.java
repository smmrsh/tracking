package io.agileintelligence.fullstackhateoas_backend.domain.service;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityMission;
import io.agileintelligence.fullstackhateoas_backend.domain.repository.RepositoryMission;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Component
@Service
public class ServiceMission {
    private RepositoryMission repositoryMission;

    public ServiceMission(RepositoryMission repositoryMission) {
        this.repositoryMission = repositoryMission;
    }

    public List<EntityMission> getAllMission() {

        return repositoryMission.findAll();
    }

    public EntityMission FindByIdMission(Long id) {
        return repositoryMission.findById(id).orElseThrow();
    }

    public EntityMission saveCap(EntityMission entityMission) {
        return repositoryMission.save(entityMission);
    }






}
