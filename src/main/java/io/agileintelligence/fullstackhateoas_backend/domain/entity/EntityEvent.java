package io.agileintelligence.fullstackhateoas_backend.domain.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "event")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class EntityEvent {
    @Id
    @GeneratedValue
    private Long Id;
    private String timeFirst;
    private String lats;
    private String longs;
    private String timeSecond;
    private Boolean stateCoordinate=false;
    @OneToMany(mappedBy = "event")
    private List<EntityTraffic> traffics;
    @OneToMany(mappedBy = "event")
    private List<EntityRest> rests;
    @OneToMany(mappedBy = "event")
    private List<EntityStopPass> stopPasses;
    @OneToMany(mappedBy = "event")
    private List<EntityTransmit> transmits;



    public EntityEvent(Long id, String timeFirst, String lats, String longs, String timeSecond, Boolean stateCoordinate, List<EntityTraffic> traffics, List<EntityRest> rests, List<EntityStopPass> stopPasses, List<EntityTransmit> transmits) {
        Id = id;
        this.timeFirst = timeFirst;
        this.lats = lats;
        this.longs = longs;
        this.timeSecond = timeSecond;
        this.stateCoordinate = stateCoordinate;
        this.traffics = traffics;
        this.rests = rests;
        this.stopPasses = stopPasses;
        this.transmits = transmits;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getTimeFirst() {
        return timeFirst;
    }

    public void setTimeFirst(String timeFirst) {
        this.timeFirst = timeFirst;
    }

    public String getLats() {
        return lats;
    }

    public void setLats(String lats) {
        this.lats = lats;
    }

    public String getLongs() {
        return longs;
    }

    public void setLongs(String longs) {
        this.longs = longs;
    }

    public String getTimeSecond() {
        return timeSecond;
    }

    public void setTimeSecond(String timeSecond) {
        this.timeSecond = timeSecond;
    }

    public Boolean getStateCoordinate() {
        return stateCoordinate;
    }

    public void setStateCoordinate(Boolean stateCoordinate) {
        this.stateCoordinate = stateCoordinate;
    }

    public List<EntityTraffic> getTraffics() {
        return traffics;
    }

    public void setTraffics(List<EntityTraffic> traffics) {
        this.traffics = traffics;
    }

    public List<EntityRest> getRests() {
        return rests;
    }

    public void setRests(List<EntityRest> rests) {
        this.rests = rests;
    }

    public List<EntityStopPass> getStopPasses() {
        return stopPasses;
    }

    public void setStopPasses(List<EntityStopPass> stopPasses) {
        this.stopPasses = stopPasses;
    }

    public List<EntityTransmit> getTransmits() {
        return transmits;
    }

    public void setTransmits(List<EntityTransmit> transmits) {
        this.transmits = transmits;
    }
}
