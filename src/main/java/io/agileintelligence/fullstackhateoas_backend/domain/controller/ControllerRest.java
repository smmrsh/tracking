package io.agileintelligence.fullstackhateoas_backend.domain.controller;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityRest;
import io.agileintelligence.fullstackhateoas_backend.domain.service.ServiceRest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest")
@CrossOrigin(origins = "http://127.0.0.1:3000")

public class ControllerRest {
    private ServiceRest services;

    public ControllerRest(ServiceRest services) {
        this.services = services;
    }

    @GetMapping
    public @ResponseBody  List<EntityRest> getAllItems() {


        return services.getAll();

    }

    @GetMapping("/{id}")
    public @ResponseBody EntityRest getItem(@PathVariable Long id) {
        EntityRest item = services.FindByItem(id);

        return item;
    }

    @PostMapping
    public @ResponseBody Object createItem(@RequestBody EntityRest item) {

        EntityRest newItem = services.saveItem(item);

        return newItem;
    }



}