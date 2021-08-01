package io.agileintelligence.fullstackhateoas_backend.domain.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "part")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")

public class EntityPart {
    @Id
    @GeneratedValue
    private Long Id;
    private String partName;
    private String partDescription;
    @OneToMany(mappedBy = "part")
    private List<EntityStation> stations;

    public EntityPart(Long id, String partName, String partDescription, List<EntityStation> stations) {
        Id = id;
        this.partName = partName;
        this.partDescription = partDescription;
        this.stations = stations;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getPartName() {
        return partName;
    }

    public void setPartName(String partName) {
        this.partName = partName;
    }

    public String getPartDescription() {
        return partDescription;
    }

    public void setPartDescription(String partDescription) {
        this.partDescription = partDescription;
    }

    public List<EntityStation> getStations() {
        return stations;
    }

    public void setStations(List<EntityStation> stations) {
        this.stations = stations;
    }
}

