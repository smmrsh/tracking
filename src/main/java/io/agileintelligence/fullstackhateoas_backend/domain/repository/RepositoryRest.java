package io.agileintelligence.fullstackhateoas_backend.domain.repository;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityRest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryRest extends JpaRepository<EntityRest,Long> {
}
