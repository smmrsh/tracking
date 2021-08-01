package io.agileintelligence.fullstackhateoas_backend.domain.repository;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityDevice;
import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityVehicleDevice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RepositoryVehicleDevice extends JpaRepository<EntityVehicleDevice,Long> {
    @Query(nativeQuery = true, value = "SELECT u.vehicle_Id FROM vehicle_device u WHERE  u.device_Id =:deviceId ORDER BY u.assign_Date  DESC LIMIT 1")
    Long findVehicleIdByDeviceId(@Param("deviceId") Long deviceId);
}