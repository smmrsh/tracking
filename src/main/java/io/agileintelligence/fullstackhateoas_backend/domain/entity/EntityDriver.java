package io.agileintelligence.fullstackhateoas_backend.domain.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "driver")

public class EntityDriver {
    @Id
    @GeneratedValue
    private Long Id;
    private String driverName;
    private String driverFamily;
    private String driverPersonalCode;
    private String driverNationalCode;
    private Boolean driverActive;
    @JsonManagedReference
    @OneToMany(mappedBy = "driver" ,fetch = FetchType.LAZY)
    private List<EntityVehicleDriver> vehicleDrivers;


    public EntityDriver(Long id, String driverName, String driverFamily, String driverPersonalCode, String driverNationalCode, Boolean driverActive, List<EntityVehicleDriver> vehicleDrivers) {
        Id = id;
        this.driverName = driverName;
        this.driverFamily = driverFamily;
        this.driverPersonalCode = driverPersonalCode;
        this.driverNationalCode = driverNationalCode;
        this.driverActive = driverActive;
        this.vehicleDrivers = vehicleDrivers;
    }

    public List<EntityVehicleDriver> getVehicleDrivers() {
        return vehicleDrivers;
    }

    public void setVehicleDrivers(List<EntityVehicleDriver> vehicleDrivers) {
        this.vehicleDrivers = vehicleDrivers;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getDriverName() {
        return driverName;
    }

    public void setDriverName(String driverName) {
        this.driverName = driverName;
    }

    public String getDriverFamily() {
        return driverFamily;
    }

    public void setDriverFamily(String driverFamily) {
        this.driverFamily = driverFamily;
    }

    public String getDriverPersonalCode() {
        return driverPersonalCode;
    }

    public void setDriverPersonalCode(String driverPersonalCode) {
        this.driverPersonalCode = driverPersonalCode;
    }

    public String getDriverNationalCode() {
        return driverNationalCode;
    }

    public void setDriverNationalCode(String driverNationalCode) {
        this.driverNationalCode = driverNationalCode;
    }

    public Boolean getDriverActive() {
        return driverActive;
    }

    public void setDriverActive(Boolean driverActive) {
        this.driverActive = driverActive;
    }

}
