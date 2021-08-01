package io.agileintelligence.fullstackhateoas_backend.domain.controller;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityStopPass;
import io.agileintelligence.fullstackhateoas_backend.domain.service.ServiceStopPass;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stoppass")
@CrossOrigin(origins = "http://127.0.0.1:3000")

public class ControllerStopPass {
    private ServiceStopPass services;

    public ControllerStopPass(ServiceStopPass services) {
        this.services = services;
    }

    @GetMapping
    public @ResponseBody  List<EntityStopPass> getAllItems() {


        return services.getAll();

    }

    @GetMapping("/{id}")
    public @ResponseBody EntityStopPass getItem(@PathVariable Long id) {
        EntityStopPass item = services.FindByItem(id);

        return item;
    }

    @PostMapping
    public @ResponseBody Object createItem(@RequestBody EntityStopPass item) {

        EntityStopPass newItem = services.saveItem(item);

        return newItem;
    }



}