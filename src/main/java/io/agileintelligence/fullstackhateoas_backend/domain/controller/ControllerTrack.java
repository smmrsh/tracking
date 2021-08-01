package io.agileintelligence.fullstackhateoas_backend.domain.controller;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityTrack;
import io.agileintelligence.fullstackhateoas_backend.domain.service.ServiceTrack;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tracks")
@CrossOrigin(origins = "http://127.0.0.1:3000")

public class ControllerTrack {
    private ServiceTrack services;

    public ControllerTrack(ServiceTrack services) {
        this.services = services;
    }

    @GetMapping
    public @ResponseBody  List<EntityTrack> getAllItems() {

        return services.getAllItems();


    }

    @GetMapping("/{id}")
    public @ResponseBody
    EntityTrack getItem(@PathVariable Long id) {
        EntityTrack item = services.FindByItem(id);

        return item;
    }

    @PostMapping
    public @ResponseBody Object createItem(@RequestBody EntityTrack item) {

        EntityTrack newItem = services.saveItem(item);

        return newItem;
    }



}