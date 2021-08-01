package io.agileintelligence.fullstackhateoas_backend.domain.repository;


import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityPoint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RepositoryPoint extends JpaRepository<EntityPoint,Long> {

    //   @Query(value = "SELECT u.tracksId FROM EntityPoint u group by u.tracksId")
    // List<Long> findAllTempMissionId();
    @Query(value = "SELECT u FROM EntityPoint u WHERE u.track.TrackId = :track_Id and u.malformed=false   order by u.Id asc")
    List<EntityPoint> findByTrackId(  @Param("track_Id") Long track_Id);
    // @Query("select u from Capability u group by trips_id")
    // Capability findByTripid(@Param("tripId") Long tripId);
}