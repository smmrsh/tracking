package io.agileintelligence.fullstackhateoas_backend.domain.repository;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityDevice;
import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityVehicleDriver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RepositoryVehicleDriver extends JpaRepository<EntityVehicleDriver,Long> {
    @Query(nativeQuery = true, value = "SELECT u.driver_Id FROM vehicle_driver u WHERE  u.vehicle_Id =:vehicleId ORDER BY u.assign_Date  DESC LIMIT 1")
    Long findDriverIdByVehicleId(@Param("vehicleId") Long vehicleId);
}
