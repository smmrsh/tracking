package io.agileintelligence.fullstackhateoas_backend.domain.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@NoArgsConstructor
@Table(name = "vehicleDevice")

public class EntityVehicleDevice {
    @Id
    @GeneratedValue
    private Long Id;
    private Timestamp assignDate;
    @JsonBackReference
    @ManyToOne
    private EntityDevice device;
    @JsonBackReference
    @ManyToOne
    private EntityVehicle vehicle;


    public EntityVehicleDevice(Long id, Timestamp assignDate, EntityDevice device, EntityVehicle vehicle) {
        Id = id;
        this.assignDate = assignDate;
        this.device = device;
        this.vehicle = vehicle;
    }

    public EntityVehicle getvehicle() {
        return vehicle;
    }

    public void setvehicle(EntityVehicle vehicle) {
        this.vehicle = vehicle;
    }

    public EntityDevice getDevice() {
        return device;
    }

    public void setDevice(EntityDevice device) {
        this.device = device;
    }




    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }


    public Timestamp getAssignDate() {
        return assignDate;
    }

    public void setAssignDate(Timestamp assignDate) {
        this.assignDate = assignDate;
    }
}
