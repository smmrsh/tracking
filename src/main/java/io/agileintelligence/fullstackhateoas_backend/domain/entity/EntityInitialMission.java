package io.agileintelligence.fullstackhateoas_backend.domain.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;
import java.time.DateTimeException;

@Entity
@NoArgsConstructor
@Table(name = "initialMission")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class EntityInitialMission {
    @Id
    @GeneratedValue
    private Long Id;
    private Long trackId;
    private Long deviceId;
    private Long driverId;
    private Long uploadStationId;
    private Timestamp dateUploadFile;
    private Long vehicleId;
    private Timestamp startTime;
    private Timestamp endTime;
    private Long partId;
    private String maxSpeed;
    private String averageSpeed;
    private Float elapsedTime;

    public EntityInitialMission( Long trackId, Long deviceId, Long driverId, Long uploadStationId, Timestamp dateUploadFile, Long vehicleId, Timestamp startTime, Timestamp endTime, Long partId, String maxSpeed, String averageSpeed, Float elapsedTime) {
        this.trackId = trackId;
        this.deviceId = deviceId;
        this.driverId = driverId;
        this.uploadStationId = uploadStationId;
        this.dateUploadFile = dateUploadFile;
        this.vehicleId = vehicleId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.partId = partId;
        this.maxSpeed = maxSpeed;
        this.averageSpeed = averageSpeed;
        this.elapsedTime = elapsedTime;
    }

    public Long getUploadStationId() {
        return uploadStationId;
    }

    public void setUploadStationId(Long uploadStationId) {
        this.uploadStationId = uploadStationId;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Long getTrackId() {
        return trackId;
    }

    public void setTrackId(Long trackId) {
        this.trackId = trackId;
    }

    public Long getDeviceId() {
        return deviceId;
    }

    public void setDeviceId(Long deviceId) {
        this.deviceId = deviceId;
    }

    public Long getDriverId() {
        return driverId;
    }

    public void setDriverId(Long driverId) {
        this.driverId = driverId;
    }



    public Timestamp getDateUploadFile() {
        return dateUploadFile;
    }

    public void setDateUploadFile(Timestamp dateUploadFile) {
        this.dateUploadFile = dateUploadFile;
    }

    public Long getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(Long vehicleId) {
        this.vehicleId = vehicleId;
    }

    public Timestamp getStartTime() {
        return startTime;
    }

    public void setStartTime(Timestamp startTime) {
        this.startTime = startTime;
    }

    public Timestamp getEndTime() {
        return endTime;
    }

    public void setEndTime(Timestamp endTime) {
        this.endTime = endTime;
    }

    public Long getPartId() {
        return partId;
    }

    public void setPartId(Long partId) {
        this.partId = partId;
    }

    public String getMaxSpeed() {
        return maxSpeed;
    }

    public void setMaxSpeed(String maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    public String getAverageSpeed() {
        return averageSpeed;
    }

    public void setAverageSpeed(String averageSpeed) {
        this.averageSpeed = averageSpeed;
    }

    public Float getElapsedTime() {
        return elapsedTime;
    }

    public void setElapsedTime(Float elapsedTime) {
        this.elapsedTime = elapsedTime;
    }
}
