package io.agileintelligence.fullstackhateoas_backend.domain.repository;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityVehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryVehicle extends JpaRepository<EntityVehicle,Long> {
}
