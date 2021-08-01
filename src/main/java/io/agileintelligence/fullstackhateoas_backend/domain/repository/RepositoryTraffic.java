package io.agileintelligence.fullstackhateoas_backend.domain.repository;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityTraffic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryTraffic extends JpaRepository<EntityTraffic,Long> {
}
