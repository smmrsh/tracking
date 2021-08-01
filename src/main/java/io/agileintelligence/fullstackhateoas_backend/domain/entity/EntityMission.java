package io.agileintelligence.fullstackhateoas_backend.domain.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "mission")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class  EntityMission {
    @Id
    @GeneratedValue
    private Long id;
    private Long missionType;
    private String missionDescription;
    private Long ddvId;
    @OneToMany(mappedBy = "mission")
    private List<EntityTraffic> traffics;
    @OneToMany(mappedBy = "mission")
    private List<EntityRest> rests;
    @OneToMany(mappedBy = "mission")
    private List<EntityStopPass> stopPasses;
    @OneToMany(mappedBy = "mission")
    private List<EntityTransmit> transmits;

    public EntityMission(Long id, Long missionType, String missionDescription, Long ddvId, List<EntityTraffic> traffics, List<EntityRest> rests, List<EntityStopPass> stopPasses, List<EntityTransmit> transmits) {
        this.id = id;
        this.missionType = missionType;
        this.missionDescription = missionDescription;
        this.ddvId = ddvId;
        this.traffics = traffics;
        this.rests = rests;
        this.stopPasses = stopPasses;
        this.transmits = transmits;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getMissionType() {
        return missionType;
    }

    public void setMissionType(Long missionType) {
        this.missionType = missionType;
    }

    public String getMissionDescription() {
        return missionDescription;
    }

    public void setMissionDescription(String missionDescription) {
        this.missionDescription = missionDescription;
    }

    public Long getDdvId() {
        return ddvId;
    }

    public void setDdvId(Long ddvId) {
        this.ddvId = ddvId;
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
