package io.agileintelligence.fullstackhateoas_backend.domain.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "device")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")

public class EntityDevice {
    @Id
    @GeneratedValue
    private Long Id;
    private String deviceDescription;
    @OneToMany(mappedBy = "device" , fetch = FetchType.LAZY)
private List<EntityVehicleDevice> vehicleDevices;
    @OneToMany(mappedBy = "device" ,fetch = FetchType.LAZY)
private List<EntityTrack> tracks;

    public EntityDevice(Long id, String deviceDescription, List<EntityVehicleDevice> vehicleDevices, List<EntityTrack> tracks) {
        Id = id;
        this.deviceDescription = deviceDescription;
        this.vehicleDevices = vehicleDevices;
        this.tracks = tracks;
    }

    public EntityDevice() {
    }

    public List<EntityVehicleDevice> getVehicleDevices() {
        return vehicleDevices;
    }

    public void setVehicleDevices(List<EntityVehicleDevice> vehicleDevices) {
        this.vehicleDevices = vehicleDevices;
    }

    public List<EntityTrack> getTracks() {
        return tracks;
    }

    public void setTracks(List<EntityTrack> tracks) {
        this.tracks = tracks;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getDeviceDescription() {
        return deviceDescription;
    }

    public void setDeviceDescription(String deviceDescription) {
        this.deviceDescription = deviceDescription;
    }

}

