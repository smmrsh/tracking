package io.agileintelligence.fullstackhateoas_backend.domain.controller;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityVehicle;
import io.agileintelligence.fullstackhateoas_backend.domain.service.ServiceVehicle;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/vehicle")
@CrossOrigin(origins = "http://localhost:3000")

public class ControllerVehicle {
    private ServiceVehicle serviceItem;

    public ControllerVehicle(ServiceVehicle serviceItem) {
        this.serviceItem = serviceItem;
    }

    @GetMapping
    public @ResponseBody  List<EntityVehicle> getAllCapabilities() {


        return serviceItem.getAllCapability();

    }

    @GetMapping("/{id}")
    public @ResponseBody EntityVehicle getCapability(@PathVariable Long id) {
        EntityVehicle capability = serviceItem.FindByCap(id);

        return capability;
    }

    @PostMapping
    public @ResponseBody Object createCapability(@RequestBody EntityVehicle capability) {


        return serviceItem.saveCap(capability);
    }

    @PutMapping("/{id}")
    public Object updateItem(@PathVariable Long id, @Validated @RequestBody EntityVehicle item, BindingResult result){

        return serviceItem.updateItem(id,item);
    }
    @DeleteMapping(value = "/deleteId/{id}")
    public void deleteUser(@PathVariable Long id) {
        serviceItem.deleteItem(id);
    }

    @DeleteMapping(value = "/deleteIds/{ids}")
    public void deleteUsers(@PathVariable List<Long> ids) {
        ids.forEach(p->{
            if (serviceItem.existsById(p)) {
                serviceItem.deleteItem(p);
            }
        });
    }

}
