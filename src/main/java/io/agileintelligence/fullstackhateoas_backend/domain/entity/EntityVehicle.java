package io.agileintelligence.fullstackhateoas_backend.domain.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "vehicle")
public class EntityVehicle {
    @Id
    @GeneratedValue
    private Long Id;
    private String vehicleTag;
    private String vehicleVin;
    private Long currentDriver;
    private Long currentDevice;
    private Boolean vehicleActive;
    private Integer MaxSpeed;
    private Integer AllowedArray;
    @JsonManagedReference
    @OneToMany(mappedBy = "vehicle")
    private List<EntityVehicleDevice> vehicleDevices;
    @JsonManagedReference
    @OneToMany(mappedBy = "vehicle")
    private List<EntityVehicleDriver> vehicleDrivers;

    public EntityVehicle(Long id, String vehicleTag, String vehicleVin, Long currentDriver, Long currentDevice, Boolean vehicleActive, Integer maxSpeed, Integer allowedArray, List<EntityVehicleDevice> vehicleDevices, List<EntityVehicleDriver> vehicleDrivers) {
        Id = id;
        this.vehicleTag = vehicleTag;
        this.vehicleVin = vehicleVin;
        this.currentDriver = currentDriver;
        this.currentDevice = currentDevice;
        this.vehicleActive = vehicleActive;
        MaxSpeed = maxSpeed;
        AllowedArray = allowedArray;
        this.vehicleDevices = vehicleDevices;
        this.vehicleDrivers = vehicleDrivers;
    }

    public List<EntityVehicleDriver> getVehicleDrivers() {
        return vehicleDrivers;
    }

    public void setVehicleDrivers(List<EntityVehicleDriver> vehicleDrivers) {
        this.vehicleDrivers = vehicleDrivers;
    }

    public List<EntityVehicleDevice> getVehicleDevices() {
        return vehicleDevices;
    }

    public void setVehicleDevices(List<EntityVehicleDevice> vehicleDevices) {
        this.vehicleDevices = vehicleDevices;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getVehicleTag() {
        return vehicleTag;
    }

    public void setVehicleTag(String vehicleTag) {
        this.vehicleTag = vehicleTag;
    }

    public String getVehicleVin() {
        return vehicleVin;
    }

    public void setVehicleVin(String vehicleVin) {
        this.vehicleVin = vehicleVin;
    }

    public Long getCurrentDriver() {
        return currentDriver;
    }

    public void setCurrentDriver(Long currentDriver) {
        this.currentDriver = currentDriver;
    }

    public Long getCurrentDevice() {
        return currentDevice;
    }

    public void setCurrentDevice(Long currentDevice) {
        this.currentDevice = currentDevice;
    }

    public Boolean getVehicleActive() {
        return vehicleActive;
    }

    public void setVehicleActive(Boolean vehicleActive) {
        this.vehicleActive = vehicleActive;
    }

    public Integer getMaxSpeed() {
        return MaxSpeed;
    }

    public void setMaxSpeed(Integer maxSpeed) {
        MaxSpeed = maxSpeed;
    }

    public Integer getAllowedArray() {
        return AllowedArray;
    }

    public void setAllowedArray(Integer allowedArray) {
        AllowedArray = allowedArray;
    }
}
