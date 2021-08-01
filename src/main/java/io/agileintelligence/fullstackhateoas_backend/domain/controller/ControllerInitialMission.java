package io.agileintelligence.fullstackhateoas_backend.domain.controller;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityInitialMission;
import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityTrack;
import io.agileintelligence.fullstackhateoas_backend.domain.service.ServiceInitialMission;
import io.agileintelligence.fullstackhateoas_backend.domain.service.ServiceTrack;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/initialMission")
@CrossOrigin(origins = "http://localhost:3000")

public class ControllerInitialMission {
    private ServiceInitialMission services;

    public ControllerInitialMission(ServiceInitialMission services) {
        this.services = services;
    }

    @GetMapping
    public @ResponseBody  List<EntityInitialMission> getAllItems() {

        return services.getAll();


    }

    @GetMapping("/{id}")
    public @ResponseBody
    EntityInitialMission getItem(@PathVariable Long id) {
        EntityInitialMission item = services.FindByItem(id);

        return item;
    }

    @PostMapping
    public @ResponseBody Object createItem(@RequestBody EntityInitialMission item) {

        EntityInitialMission newItem = services.saveItem(item);

        return newItem;
    }



}