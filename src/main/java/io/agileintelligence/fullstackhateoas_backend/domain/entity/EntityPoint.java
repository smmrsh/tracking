package io.agileintelligence.fullstackhateoas_backend.domain.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "point")
public class EntityPoint {
    @Id
    @GeneratedValue
    private Long Id;
    private String timeFirst;
    private String lats;
    private String longs;
    private String timeSecond;
    private Integer sateLite;
    private Boolean malformed=false;
    private Boolean outlier1=false;
    private Boolean outlier2=false;
    private Boolean duplicate=false;
    private double speed;
    @Transient
    @JsonIgnore
    private MultipartFile file;
    @JsonBackReference
    @ManyToOne
    private EntityTrack track;

    public EntityPoint(EntityTrack track) {
        this.track = track;
    }
    public EntityPoint() {
     
    }

    public EntityTrack getTrack() {
        return track;
    }

    public void setTrack(EntityTrack track) {
        this.track = track;
    }

    public EntityPoint(String timeFirst, String lats, String longs,Integer sateLite, String timeSecond, Boolean malformed,Boolean outlier1,Boolean outlier2,Boolean duplicate,EntityTrack track,double speed) {

        this.malformed = malformed;
        this.outlier1 = outlier1;
        this.outlier2 = outlier2;
        this.duplicate = duplicate;
        this.timeFirst = timeFirst;
        this.lats = lats;
        this.longs = longs;
        this.timeSecond = timeSecond;
        this.file = file;
        this.track = track;
        this.sateLite = sateLite;
        this.speed = speed;
    }

    public double getSpeed() {
        return speed;
    }

    public void setSpeed(double speed) {
        this.speed = speed;
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

    public Integer getSateLite() {
        return sateLite;
    }

    public void setSateLite(Integer sateLite) {
        this.sateLite = sateLite;
    }

    public Boolean getMalformed() {
        return malformed;
    }

    public void setMalformed(Boolean malformed) {
        this.malformed = malformed;
    }

    public Boolean getOutlier1() {
        return outlier1;
    }

    public void setOutlier1(Boolean outlier1) {
        this.outlier1 = outlier1;
    }
    public Boolean getOutlier2() {
        return outlier2;
    }

    public void setOutlier2(Boolean outlier2) {
        this.outlier2 = outlier2;
    }
    public Boolean getDuplicate() {
        return duplicate;
    }
    public void setDuplicate(Boolean duplicate) { this.duplicate = duplicate; }
    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }

}
