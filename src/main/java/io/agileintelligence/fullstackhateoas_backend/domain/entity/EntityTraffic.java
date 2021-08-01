package io.agileintelligence.fullstackhateoas_backend.domain.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Table(name = "traffic")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class EntityTraffic {
    @Id
    @GeneratedValue
    private Long Id;
    private String trafficType;
    private Integer trafficStart;
    private Integer trafficEnd;
    @ManyToOne
    private EntityMission mission;
    @ManyToOne
    private EntityEvent event;

    public EntityTraffic(Long id, String trafficType, Integer trafficStart, Integer trafficEnd, EntityMission mission, EntityEvent event) {
        Id = id;
        this.trafficType = trafficType;
        this.trafficStart = trafficStart;
        this.trafficEnd = trafficEnd;
        this.mission = mission;
        this.event = event;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getTrafficType() {
        return trafficType;
    }

    public void setTrafficType(String trafficType) {
        this.trafficType = trafficType;
    }

    public Integer getTrafficStart() {
        return trafficStart;
    }

    public void setTrafficStart(Integer trafficStart) {
        this.trafficStart = trafficStart;
    }

    public Integer getTrafficEnd() {
        return trafficEnd;
    }

    public void setTrafficEnd(Integer trafficEnd) {
        this.trafficEnd = trafficEnd;
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
