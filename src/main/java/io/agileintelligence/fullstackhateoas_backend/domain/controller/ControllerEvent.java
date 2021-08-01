package io.agileintelligence.fullstackhateoas_backend.domain.controller;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityEvent;
import io.agileintelligence.fullstackhateoas_backend.domain.service.ServiceEvent;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/event")
@CrossOrigin(origins = "http://127.0.0.1:3000")

public class ControllerEvent {
    private ServiceEvent services;

    public ControllerEvent(ServiceEvent services) {
        this.services = services;
    }

    @GetMapping
    public @ResponseBody  List<EntityEvent> getAllItems() {


        return services.getAll();

    }

    @GetMapping("/{id}")
    public @ResponseBody EntityEvent getItem(@PathVariable Long id) {
        EntityEvent item = services.FindByItem(id);

        return item;
    }

    @PostMapping
    public @ResponseBody Object createItem(@RequestBody EntityEvent item) {

        EntityEvent newItem = services.saveItem(item);

        return newItem;
    }



}