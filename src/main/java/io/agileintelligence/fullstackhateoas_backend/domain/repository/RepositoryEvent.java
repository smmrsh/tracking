package io.agileintelligence.fullstackhateoas_backend.domain.repository;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityEvent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryEvent extends JpaRepository<EntityEvent,Long> {
}
