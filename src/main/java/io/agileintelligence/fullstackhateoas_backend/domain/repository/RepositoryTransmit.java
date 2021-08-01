package io.agileintelligence.fullstackhateoas_backend.domain.repository;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityTransmit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryTransmit extends JpaRepository<EntityTransmit,Long> {
}
