package io.agileintelligence.fullstackhateoas_backend.domain.repository;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityStopPass;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryStopPass extends JpaRepository<EntityStopPass,Long> {
}
