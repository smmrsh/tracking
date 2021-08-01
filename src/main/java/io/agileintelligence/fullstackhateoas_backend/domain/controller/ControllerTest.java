package io.agileintelligence.fullstackhateoas_backend.domain.controller;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityDevice;
import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityTrack;
import io.agileintelligence.fullstackhateoas_backend.domain.service.ServiceDevice;
import io.agileintelligence.fullstackhateoas_backend.domain.service.ServicePoint;
import io.agileintelligence.fullstackhateoas_backend.domain.service.ServiceTest;
import io.agileintelligence.fullstackhateoas_backend.domain.tools.Refine;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/test")
@CrossOrigin(origins = "http://localhost:3000")

public class ControllerTest {
    private ServicePoint servicePoint;
    @Autowired
    public ControllerTest(ServicePoint servicePoint) {
        this.servicePoint = servicePoint;
    }


    }




