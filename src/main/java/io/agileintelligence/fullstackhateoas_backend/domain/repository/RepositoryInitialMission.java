package io.agileintelligence.fullstackhateoas_backend.domain.repository;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityInitialMission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryInitialMission extends JpaRepository<EntityInitialMission,Long> {
}
