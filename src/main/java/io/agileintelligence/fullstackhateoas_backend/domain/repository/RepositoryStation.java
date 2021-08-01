package io.agileintelligence.fullstackhateoas_backend.domain.repository;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityStation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryStation extends JpaRepository<EntityStation,Long> {
}
