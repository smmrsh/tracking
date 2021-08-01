package io.agileintelligence.fullstackhateoas_backend.domain.controller;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityMission;
import io.agileintelligence.fullstackhateoas_backend.domain.service.ServiceMission;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mission")
@CrossOrigin(origins = "http://127.0.0.1:3000")

public class ControllerMission {
    private ServiceMission serviceMission;

    public ControllerMission(ServiceMission serviceMission) {
        this.serviceMission = serviceMission;
    }

    @GetMapping
    public @ResponseBody  List<EntityMission> getAllCapabilities() {


        return serviceMission.getAllMission();

    }

    @GetMapping("/{id}")
    public @ResponseBody EntityMission getCapability(@PathVariable Long id) {
        EntityMission entityMission = serviceMission.FindByIdMission(id);

        return entityMission;
    }

    @PostMapping
    public @ResponseBody Object createCapability(@RequestBody EntityMission entityMission) {

        EntityMission newCapability = serviceMission.saveCap(entityMission);

        return serviceMission.saveCap(newCapability);
    }



}