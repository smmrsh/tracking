package io.agileintelligence.fullstackhateoas_backend.domain.service;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityVehicle;
import io.agileintelligence.fullstackhateoas_backend.domain.repository.RepositoryVehicle;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ServiceVehicle {
    private RepositoryVehicle repository;

    public ServiceVehicle(RepositoryVehicle repository) {
        this.repository = repository;
    }

    public List<EntityVehicle> getAllCapability() {

        return repository.findAll();
    }

    public EntityVehicle FindByCap(Long id) {
        return repository.findById(id).orElseThrow();
    }
    public boolean existsById(Long id) {
        return repository.existsById(id);
    }

    public EntityVehicle saveCap(EntityVehicle capability) {
        return this.repository.save(capability);
    }
    public EntityVehicle updateItem(Long id, EntityVehicle capability){

        return repository.findById(id).map(
                item -> {
                    item.setVehicleTag(capability.getVehicleTag());
                    item.setVehicleVin(capability.getVehicleVin());
                    item.setCurrentDevice(capability.getCurrentDevice());
                    item.setCurrentDriver(capability.getCurrentDriver());
                    item.setMaxSpeed(capability.getMaxSpeed());
                    item.setVehicleActive(capability.getVehicleActive());
                    return repository.save(item);
                }).orElseGet(()-> {
            return repository.save(capability);
        });
    }

    public void deleteItem(Long id){

        repository.delete(
                repository.findById(id).orElseThrow());
    }

}
