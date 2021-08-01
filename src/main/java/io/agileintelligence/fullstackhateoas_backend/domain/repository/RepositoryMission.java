package io.agileintelligence.fullstackhateoas_backend.domain.repository;
import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityMission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryMission extends JpaRepository<EntityMission,Long> {
}

