package io.agileintelligence.fullstackhateoas_backend.domain.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@JsonIdentityInfo(generator =ObjectIdGenerators.PropertyGenerator.class,property = "id")
@Table(name = "station")
public class EntityStation {
    @Id
    @GeneratedValue
    private Long Id;
    private String stationName;
    @JsonManagedReference
    @OneToMany(mappedBy = "station")
    private List<EntityTrack> tracks;
    @ManyToOne
    private EntityPart part;

    public EntityStation(Long id, String stationName, List<EntityTrack> tracks, EntityPart part) {
        Id = id;
        this.stationName = stationName;
        this.tracks = tracks;
        this.part = part;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getStationName() {
        return stationName;
    }

    public void setStationName(String stationName) {
        this.stationName = stationName;
    }

    public List<EntityTrack> getTracks() {
        return tracks;
    }

    public void setTracks(List<EntityTrack> tracks) {
        this.tracks = tracks;
    }

    public EntityPart getPart() {
        return part;
    }

    public void setPart(EntityPart part) {
        this.part = part;
    }
}
