package io.agileintelligence.fullstackhateoas_backend.domain.controller;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityPoint;
import io.agileintelligence.fullstackhateoas_backend.domain.service.ServiceInitialMission;
import io.agileintelligence.fullstackhateoas_backend.domain.service.ServicePoint;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;

import java.io.Console;
import java.io.IOException;
import org.json.simple.parser.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;




import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin(origins = "http://localhost:3000")

public class ControllerPoint {
    private ServicePoint servicePoint;
    private ServiceInitialMission serviceInitialMission;

    public ControllerPoint(ServicePoint servicePoint, ServiceInitialMission serviceInitialMission) {
        this.servicePoint = servicePoint;
        this.serviceInitialMission = serviceInitialMission;
    }

    @Autowired


    @GetMapping
    public @ResponseBody
    CollectionModel<EntityModel<EntityPoint>> getAllCapabilities() {

        List<EntityModel<EntityPoint>> capabilities = servicePoint.getAllCapability().stream()
                .map(track -> new EntityModel<>(track)).collect(Collectors.toList());
        return new CollectionModel<>(capabilities);
    }

  //  @GetMapping("/point")
 //   public @ResponseBody
  //  List<List<EntityPoint>> getTrack() {

   //     List<List<EntityPoint>> entityPoints = servicePoint.GetTrack();
   //     return entityPoints;
   // }
  //  @GetMapping("/tempMissionIds")
 //   public @ResponseBody
 //   List<Long> getTemIdes() {

   //     return servicePoint.getAllTempIds();
  //  }

    @GetMapping("/{id}")
    public @ResponseBody
    EntityModel<?> getCapability(@PathVariable Long id) {
        EntityPoint point = servicePoint.FindByCap(id);

        return new EntityModel<>(point,
                linkTo(methodOn(ControllerPoint.class).getCapability(id)).withRel("getThisCapability"),
                linkTo(methodOn(ControllerPoint.class).getAllCapabilities()).withRel("getAllCapabilities")

        );
    }

    @PostMapping
    public @ResponseBody
    Object createCapability(@RequestBody EntityPoint point) {

        EntityPoint newPoint = servicePoint.saveCap(point);

        return new EntityModel<>(newPoint,
                linkTo(methodOn(ControllerPoint.class).getCapability(point.getId())).withRel("getThisCapability"),
                linkTo(methodOn(ControllerPoint.class).getAllCapabilities()).withRel("getAllCapabilities")
        );

    }

    @RequestMapping("/csvFile")
    public @ResponseBody
    void tranceCsvToDB() throws IOException {
        servicePoint.saveSvcToDb();
    }

    @SneakyThrows
    @PostMapping(value = "/saveCsvs")
    public void UploadFile(EntityPoint point, @RequestParam("deviceId") Long deviceId) {
        Long lastTrackId=0L;
        try{
            lastTrackId = servicePoint.saveFile(point, deviceId);
        }catch(IOException e){
            
        }catch(ParseException e){

        }


        List<EntityPoint> lPnts = new ArrayList<>();

        try{
            lPnts = servicePoint.refinePoints(lastTrackId,deviceId,1001);
        }catch(IOException e){
            
        }catch(ParseException e){

        } catch (java.text.ParseException e) {
            e.printStackTrace();
        }
        

        try{
            serviceInitialMission.createInitialMission(lPnts,deviceId,100,lastTrackId);

        }catch(IOException e){
            
        }catch(ParseException e){

        } catch (java.text.ParseException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
   
        servicePoint.savePointsAsTrack(lPnts);


        
      

     


    }

}