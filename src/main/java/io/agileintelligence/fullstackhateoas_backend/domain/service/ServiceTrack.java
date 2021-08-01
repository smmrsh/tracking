package io.agileintelligence.fullstackhateoas_backend.domain.service;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.*;
import io.agileintelligence.fullstackhateoas_backend.domain.repository.RepositoryEvent;
import io.agileintelligence.fullstackhateoas_backend.domain.repository.RepositoryTrack;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional

public class ServiceTrack {
    private RepositoryTrack repository;
    private RepositoryEvent repositoryEvent;

    public ServiceTrack(RepositoryTrack repository, RepositoryEvent repositoryEvent) {
        this.repository = repository;
        this.repositoryEvent = repositoryEvent;
    }


    public List<EntityTrack> getAllItems() {
        List<EntityTrack> allTrack=  repository.findAll();
        List<EntityTrack> refindAllTrack = new ArrayList<>();;
        for (EntityTrack t : allTrack) {
            List<EntityPoint>   pnts = t.getPoints().stream().filter(p -> !"true".equals(p.getMalformed().toString()) && (!"true".equals(p.getOutlier1().toString()) && !"true".equals(p.getOutlier2().toString())) &&  !"true".equals(p.getDuplicate().toString())).collect(Collectors.toList() );
            t.getPoints().clear();
            t.getPoints().addAll(pnts);
            refindAllTrack.add(t);
        }
        return refindAllTrack;
    }


    public EntityTrack FindByItem(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public EntityTrack saveItem(EntityTrack item) {
        return this.repository.save(item);
    }


}
