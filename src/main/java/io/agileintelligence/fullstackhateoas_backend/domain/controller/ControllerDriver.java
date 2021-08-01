package io.agileintelligence.fullstackhateoas_backend.domain.controller;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityDriver;
import io.agileintelligence.fullstackhateoas_backend.domain.service.ServiceDriver;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/driver")
@CrossOrigin(origins = "http://127.0.0.1:3000")

public class ControllerDriver {
    private ServiceDriver capabilityService;

    public ControllerDriver(ServiceDriver capabilityService) {
        this.capabilityService = capabilityService;
    }

    @GetMapping
    public @ResponseBody  List<EntityDriver> getAllCapabilities() {


        return capabilityService.getAllCapability();

    }

    @GetMapping("/{id}")
    public @ResponseBody EntityDriver getCapability(@PathVariable Long id) {
        EntityDriver capability = capabilityService.FindByCap(id);

        return capability;
    }

    @PostMapping
    public @ResponseBody Object createCapability(@RequestBody EntityDriver capability) {

        EntityDriver newCapability = capabilityService.saveCap(capability);

        return capabilityService.saveCap(capability);
    }



}