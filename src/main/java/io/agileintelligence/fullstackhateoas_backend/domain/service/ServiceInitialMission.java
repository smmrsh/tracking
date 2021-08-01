package io.agileintelligence.fullstackhateoas_backend.domain.service;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityInitialMission;
import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityPoint;
import io.agileintelligence.fullstackhateoas_backend.domain.repository.RepositoryInitialMission;
import io.agileintelligence.fullstackhateoas_backend.domain.repository.RepositoryVehicleDevice;
import io.agileintelligence.fullstackhateoas_backend.domain.repository.RepositoryVehicleDriver;
import io.agileintelligence.fullstackhateoas_backend.domain.tools.Refine;
import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;
import java.util.List;

import static java.lang.Float.parseFloat;

@Component
public class ServiceInitialMission {
    private RepositoryInitialMission repositoryInitialMission;
    private RepositoryVehicleDevice repositoryVehicleDevice;
    private RepositoryVehicleDriver repositoryVehicleDriver;

    public ServiceInitialMission(RepositoryInitialMission repositoryInitialMission, RepositoryVehicleDevice repositoryVehicleDevice, RepositoryVehicleDriver repositoryVehicleDriver) {
        this.repositoryInitialMission = repositoryInitialMission;
        this.repositoryVehicleDevice = repositoryVehicleDevice;
        this.repositoryVehicleDriver = repositoryVehicleDriver;
    }

    public List<EntityInitialMission> getAll() {

        return repositoryInitialMission.findAll();
    }

    public EntityInitialMission FindByItem(Long id) {
        return repositoryInitialMission.findById(id).orElseThrow();
    }


    public EntityInitialMission saveItem(EntityInitialMission transmit) {
        return this.repositoryInitialMission.save(transmit);
    }
    public void createInitialMission( List<EntityPoint> lPnts,long deviceId,long stationId,long trackId) throws IOException, ParseException, java.text.ParseException {
        Refine refine = new Refine();
        JSONObject maxAvgSpeed = new JSONObject();
        long vehicleId=repositoryVehicleDevice.findVehicleIdByDeviceId(deviceId);
        long driverId=repositoryVehicleDriver.findDriverIdByVehicleId(vehicleId);
        maxAvgSpeed = refine.calculateSpeed(lPnts);
        long partId=100;
        Instant instant = Instant.now();
        Timestamp dateUploadFile = Timestamp.from(instant);

//        String input = "2007-11-11 12:13:14" ;
//        java.sql.Timestamp ts = java.sql.Timestamp.valueOf( input ) ;
//
//        try {
//            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss.SSS");
//            Date parsedDate = dateFormat.parse(yourString);
//            Timestamp timestamp = new java.sql.Timestamp(parsedDate.getTime());
//        } catch(Exception e) { //this generic but you can control another types of exception
//            // look the origin of excption
//        }


//        Timestamp startTime=lPnts.get(0).getTimeFirst();
//        Timestamp endTime=lPnts.get(lPnts.size()-1).getTimeFirst();
      java.sql.Timestamp startTime = java.sql.Timestamp.valueOf( "2007-11-11 5:13:14" ) ;
         java.sql.Timestamp endTime = java.sql.Timestamp.valueOf( "2007-11-11 12:13:14" ) ;
         String maxSpeed=maxAvgSpeed.get("maxSpeed").toString();
         String averageSpeed=maxAvgSpeed.get("avgSpeed").toString();


        Float elapsedTime=parseFloat(refine.compareTwoTimeStamps(startTime,endTime).get("minutes").toString());

     EntityInitialMission initialMission=  new EntityInitialMission( trackId,  deviceId,  driverId, stationId,  dateUploadFile,  vehicleId,  startTime,  endTime,  partId,  maxSpeed,  averageSpeed,  elapsedTime);

   repositoryInitialMission.save(initialMission);
    }






}
