package io.agileintelligence.fullstackhateoas_backend.domain.controller;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityTransmit;
import io.agileintelligence.fullstackhateoas_backend.domain.service.ServiceTransmit;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transmit")
@CrossOrigin(origins = "http://127.0.0.1:3000")

public class ControllerTransmit {
    private ServiceTransmit services;

    public ControllerTransmit(ServiceTransmit services) {
        this.services = services;
    }

    @GetMapping
    public @ResponseBody  List<EntityTransmit> getAllItems() {


        return services.getAll();

    }

    @GetMapping("/{id}")
    public @ResponseBody EntityTransmit getItem(@PathVariable Long id) {
        EntityTransmit item = services.FindByItem(id);

        return item;
    }

    @PostMapping
    public @ResponseBody Object createItem(@RequestBody EntityTransmit item) {

        EntityTransmit newItem = services.saveItem(item);

        return newItem;
    }



}