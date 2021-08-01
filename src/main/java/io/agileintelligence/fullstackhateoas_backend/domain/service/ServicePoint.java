package io.agileintelligence.fullstackhateoas_backend.domain.service;

import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityPoint;
import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityDevice;
import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityPoint;
import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityTrack;
import io.agileintelligence.fullstackhateoas_backend.domain.repository.RepositoryPoint;
import io.agileintelligence.fullstackhateoas_backend.domain.repository.RepositoryTrack;
import io.agileintelligence.fullstackhateoas_backend.domain.repository.RepositoryVehicleDevice;
import io.agileintelligence.fullstackhateoas_backend.domain.repository.RepositoryVehicleDriver;
import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import io.agileintelligence.fullstackhateoas_backend.domain.tools.Refine;

import java.io.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ServicePoint {
    @Autowired
    private RepositoryPoint repositoryPoint;
    @Autowired
    private RepositoryTrack repositoryTrack;
    @Autowired
    private RepositoryVehicleDriver repositoryVehicleDriver;
    @Autowired
    private RepositoryVehicleDevice repositoryVehicleDevice;



    //private Refine refine;


    public ServicePoint(RepositoryPoint repositoryPoint, RepositoryTrack repositoryTrack, RepositoryVehicleDriver repositoryVehicleDriver, RepositoryVehicleDevice repositoryVehicleDevice) {
        this.repositoryPoint = repositoryPoint;
        this.repositoryTrack = repositoryTrack;
        this.repositoryVehicleDriver = repositoryVehicleDriver;
        this.repositoryVehicleDevice = repositoryVehicleDevice;
    }

    public List<EntityPoint> getAllCapability() {

        return repositoryPoint.findAll();
    }

    public EntityPoint FindByCap(Long id) {
        return repositoryPoint.findById(id).orElseThrow();
    }


    public EntityPoint saveCap(EntityPoint point) {
        return repositoryPoint.save(point);
    }

    public String saveSvcToDb() throws IOException {

        int randomNumber = (int) (Math.random() * 9999);

        if (randomNumber <= 1000) {
            randomNumber = randomNumber + 1000;
        }
        EntityPoint c = new EntityPoint();
        String path = "C:\\Users\\cc\\IdeaProjects\\fullstackhateoas_backend\\src\\main\\java\\io\\agileintelligence\\fullstackhateoas_backend\\domain\\test-1.csv";
        BufferedReader bufferedReader = new BufferedReader(new FileReader(path));
        String line = "";
        while ((line = bufferedReader.readLine()) != null) {
            String[] values = line.split(",");
            if (values[2].length() < 8 | values[2].length() < 8)
                c.setMalformed(true);
            c.setLats(values[1]);
            c.setLongs(values[2]);
            c.setTimeFirst(values[0]);
            c.setTimeSecond(values[4]);
            repositoryPoint.save(c);
        }
        EntityPoint t = new EntityPoint();

        return "";
    }

    public int tempMissionGeneratore() {
        int randomNumber = (int) (Math.random() * 9999);

        if (randomNumber <= 1000) {
            randomNumber = randomNumber + 1000;
        }
        return randomNumber;
    }

    public List<EntityPoint> findByTrackId(Long trackId) {

        return repositoryPoint.findByTrackId(trackId);

    }
    public List<EntityTrack> findTrack(Long trackId) {

        return repositoryTrack.findByTrackId(trackId);

    }


    public long saveFile(EntityPoint file, Long deviceId) throws IOException, ParseException {
        int randomNumber = tempMissionGeneratore();
        List<String> result = new ArrayList<>();
        InputStream is = file.getFile().getInputStream();
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(is));
        String line = "";
        EntityTrack t = new EntityTrack();
        Boolean malformed=false;
        Boolean outlier1=false;
        Boolean outlier2=false;
        Boolean duplicate=false;
        while ((line = bufferedReader.readLine()) != null) {
            String[] values = line.split(",");
            if (values[1].length() < 8 | values[2].length() < 8)
                malformed=true;
            EntityPoint c = new EntityPoint(values[0], values[1], values[2], Integer.parseInt(values[3]),values[4], malformed,outlier1,outlier2,duplicate, t,-1);
            repositoryPoint.save(c);
            malformed=false;
        }

        //t.setTrackId((long) randomNumber);
        EntityDevice d =new EntityDevice();
        d.setId(deviceId);
        t.setdevice(d);
        repositoryTrack.save(t);

        return t.getTrackId();


    }
    public List<EntityPoint> refinePoints(long trackID,long deviceId,long stationId) throws IOException, ParseException, java.text.ParseException {
        Refine refine = new Refine();
        JSONObject maxAvgSpeed = new JSONObject();
        //List<EntityPoint> lPnts = Collections.synchronizedList(new ArrayList());
        List<EntityPoint> lPnts;
        List<EntityPoint> tmpLPnts = new ArrayList<>();
        lPnts = findByTrackId(trackID);
        refine.findAndProcessDuplicates(lPnts);
        lPnts = lPnts.stream().filter(p -> p.getDuplicate() == false).collect(Collectors.toList());
        if (!lPnts.isEmpty()) {
            refine.findAndProcessOutliers(lPnts, 1, 10);


            //for (EntityPoint pnt : lPnts) {
            //   repositoryPoint.save(pnt);
            // }
        }
        return lPnts;


    }


    //   public List<List<EntityPoint>> GetTrack() {
    //   List<List<EntityPoint>> tracks = new ArrayList<>();
    //    List<Long> tempId = repository.findAllTempMissionId();
    //    for (Long id : tempId) {
    //      List<EntityPoint> track = repository.findTrackByTempMissionId(id);
    //       tracks.add(track);

    //  }
    //     return tracks;
//    }

    // public List<Long> getAllTempIds() {
    //     return repository.findAllTempMissionId();
    // }

    public List<EntityPoint> changeEntityLatLong() {
        List<EntityPoint> entityPoint = repositoryPoint.findAll();
        ArrayList a = new ArrayList();
        for (var i = 0; i < 100; i++) {
            ArrayList arrayItem = new ArrayList();
            EntityPoint point=new EntityPoint();
            arrayItem.set(i, 10);
            a.set(i,arrayItem);
        }

        return repositoryPoint.findAll();
    }

    public void savePointsAsTrack(List<EntityPoint> lPnts) {
        for (EntityPoint pnt : lPnts) {
           repositoryPoint.save(pnt);
         }
    }
}


// Customer customerToUpdate = customerRepository.getOne(id);
//customerToUpdate.setName(customerDto.getName);
// customerRepository.save(customerToUpdate);
