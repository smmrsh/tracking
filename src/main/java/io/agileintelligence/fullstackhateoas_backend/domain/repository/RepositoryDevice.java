package io.agileintelligence.fullstackhateoas_backend.domain.repository;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityDevice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryDevice extends JpaRepository<EntityDevice,Long> {
}
