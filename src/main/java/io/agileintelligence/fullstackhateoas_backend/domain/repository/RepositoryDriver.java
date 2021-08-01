package io.agileintelligence.fullstackhateoas_backend.domain.repository;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityDriver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryDriver extends JpaRepository<EntityDriver,Long> {
}
