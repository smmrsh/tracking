package io.agileintelligence.fullstackhateoas_backend.domain.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "track")
public class EntityTrack {
    @Id
    @GeneratedValue
    private long TrackId;
    @JsonBackReference
    @ManyToOne
    private EntityDevice device;
    @JsonManagedReference
    @OneToMany(mappedBy = "track" )
    private List<EntityPoint> points;
    @JsonBackReference
    @ManyToOne
    private EntityStation station;
    public EntityTrack(EntityDevice device, List<EntityPoint> points,EntityStation station) {
        this.station=station;
        this.device = device;
        this.points = points;
    }

    public EntityTrack() {
    }

    public EntityStation getstation() {
        return station;
    }

    public void setstation(EntityStation station) {
        this.station = station;
    }

    public long getTrackId() {
        return TrackId;
    }

    //public void setTrackId(long trackId) {
    //    TrackId = trackId;
    //}

    public EntityDevice getdevice() {
        return device;
    }

    public void setdevice(EntityDevice device) {
        this.device = device;
    }

    public List<EntityPoint> getPoints() {
        return points;
    }

    public void setPoints(List<EntityPoint> points) {
        this.points = points;
    }
}
