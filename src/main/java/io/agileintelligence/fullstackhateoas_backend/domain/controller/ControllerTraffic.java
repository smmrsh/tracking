package io.agileintelligence.fullstackhateoas_backend.domain.controller;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityTraffic;
import io.agileintelligence.fullstackhateoas_backend.domain.service.ServiceTraffic;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/traffic")
@CrossOrigin(origins = "http://127.0.0.1:3000")

public class ControllerTraffic {
    private ServiceTraffic services;

    public ControllerTraffic(ServiceTraffic services) {
        this.services = services;
    }

    @GetMapping
    public @ResponseBody  List<EntityTraffic> getAllItems() {


        return services.getAll();

    }

    @GetMapping("/{id}")
    public @ResponseBody EntityTraffic getItem(@PathVariable Long id) {
        EntityTraffic item = services.FindByItem(id);

        return item;
    }

    @PostMapping
    public @ResponseBody Object createItem(@RequestBody EntityTraffic item) {

        EntityTraffic newItem = services.saveItem(item);

        return newItem;
    }



}