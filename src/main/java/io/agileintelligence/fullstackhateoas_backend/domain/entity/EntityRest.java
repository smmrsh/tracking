package io.agileintelligence.fullstackhateoas_backend.domain.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Table(name = "rest")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class EntityRest {
    @Id
    @GeneratedValue
    private Long Id;
    private String timeFirst;
    private String lats;
    private String longs;
    private String timeSecond;
    private Boolean stateCoordinate=false;
    @ManyToOne
    private EntityMission mission;
    @ManyToOne
    private EntityEvent event;

    public EntityRest(Long id, String timeFirst, String lats, String longs, String timeSecond, Boolean stateCoordinate, EntityMission mission, EntityEvent event) {
        Id = id;
        this.timeFirst = timeFirst;
        this.lats = lats;
        this.longs = longs;
        this.timeSecond = timeSecond;
        this.stateCoordinate = stateCoordinate;
        this.mission = mission;
        this.event = event;
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

    public EntityMission getMission() {
        return mission;
    }

    public void setMission(EntityMission mission) {
        this.mission = mission;
    }

    public EntityEvent getEvent() {
        return event;
    }

    public void setEvent(EntityEvent event) {
        this.event = event;
    }
}
