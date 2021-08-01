package io.agileintelligence.fullstackhateoas_backend.domain.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Table(name = "Stop_pass")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class EntityStopPass {
    @Id
    @GeneratedValue
    private Long Id;
    private Integer length;
    private Integer point;
    private Long savedLocation;
    private Boolean stop;
    private Boolean start;
    private Boolean pass;
    @ManyToOne
    private EntityMission mission;
    @ManyToOne
    private EntityEvent event;

    public EntityStopPass(Long id, Integer length, Integer point, Long savedLocation, Boolean stop, Boolean start, Boolean pass, EntityMission mission, EntityEvent event) {
        Id = id;
        this.length = length;
        this.point = point;
        this.savedLocation = savedLocation;
        this.stop = stop;
        this.start = start;
        this.pass = pass;
        this.mission = mission;
        this.event = event;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Integer getLength() {
        return length;
    }

    public void setLength(Integer length) {
        this.length = length;
    }

    public Integer getPoint() {
        return point;
    }

    public void setPoint(Integer point) {
        this.point = point;
    }

    public Long getSavedLocation() {
        return savedLocation;
    }

    public void setSavedLocation(Long savedLocation) {
        this.savedLocation = savedLocation;
    }

    public Boolean getStop() {
        return stop;
    }

    public void setStop(Boolean stop) {
        this.stop = stop;
    }

    public Boolean getStart() {
        return start;
    }

    public void setStart(Boolean start) {
        this.start = start;
    }

    public Boolean getPass() {
        return pass;
    }

    public void setPass(Boolean pass) {
        this.pass = pass;
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
