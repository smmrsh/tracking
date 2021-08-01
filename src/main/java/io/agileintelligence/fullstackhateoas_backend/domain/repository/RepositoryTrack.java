package io.agileintelligence.fullstackhateoas_backend.domain.repository;


import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityPoint;
import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityTrack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RepositoryTrack extends JpaRepository<EntityTrack,Long> {
    @Query(value = "SELECT u FROM EntityTrack u where u.TrackId =:trackId ")
   List<EntityTrack>  findByTrackId(@Param("trackId") Long trackId);

    // @Query(value = "SELECT u FROM EntityTrack u where points.malformed=false ")
     //  List<Long> findAllCorrectPoints();

}

