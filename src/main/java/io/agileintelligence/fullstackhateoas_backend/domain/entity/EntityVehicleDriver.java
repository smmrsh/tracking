package io.agileintelligence.fullstackhateoas_backend.domain.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@NoArgsConstructor
@Table(name = "vehicleDriver")

public class EntityVehicleDriver {
    @Id
    @GeneratedValue
    private Long Id;
    private Timestamp assignDate;

    @JsonBackReference
    @ManyToOne
    private EntityDriver driver;
    @JsonBackReference
    @ManyToOne
    private EntityVehicle vehicle;

    public EntityVehicleDriver(Long id, Timestamp assignDate, EntityDriver driver, EntityVehicle vehicle) {
        Id = id;
        this.assignDate = assignDate;
        this.driver = driver;
        this.vehicle = vehicle;
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

    public EntityDriver getdriver() {
        return driver;
    }

    public void setdriver(EntityDriver driver) {
        this.driver = driver;
    }

    public EntityVehicle getvehicle() {
        return vehicle;
    }

    public void setvehicle(EntityVehicle vehicle) {
        this.vehicle = vehicle;
    }
}
