package io.agileintelligence.fullstackhateoas_backend.domain.controller;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityDevice;
import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityVehicle;
import io.agileintelligence.fullstackhateoas_backend.domain.service.ServiceDevice;
import io.agileintelligence.fullstackhateoas_backend.domain.service.ServiceVehicle;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/device")
@CrossOrigin(origins = "http://127.0.0.1:3000")

public class ControllerDevice {
    private ServiceDevice serviceDevice;

    public ControllerDevice(ServiceDevice capabilityService) {
        this.serviceDevice = capabilityService;
    }

    @GetMapping
    public @ResponseBody  List<EntityDevice> getAllCapabilities() {


        return serviceDevice.getAllitems();

    }

    @GetMapping("/{id}")
    public @ResponseBody EntityDevice getCapability(@PathVariable Long id) {
        EntityDevice device = serviceDevice.FindByCap(id);

        return device;
    }

    @PostMapping
    public @ResponseBody Object createCapability(@RequestBody EntityDevice device) {


        return serviceDevice.saveCap(device);
    }



}