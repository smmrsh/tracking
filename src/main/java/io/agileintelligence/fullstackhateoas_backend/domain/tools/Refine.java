package io.agileintelligence.fullstackhateoas_backend.domain.tools;
import java.awt.geom.Point2D;
import java.io.*;

import java.text.SimpleDateFormat;
import java.util.*;
import java.util.logging.FileHandler;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import io.agileintelligence.fullstackhateoas_backend.domain.entity.EntityPoint;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.*;

public class Refine {
    public double calculateDistance(
            double x1,
            double y1,
            double x2,
            double y2) {

        return Point2D.distance(x1, y1, x2, y2);
    }
    public Long calculateInterval(String time1, String time2) throws java.text.ParseException {

        SimpleDateFormat format = new SimpleDateFormat("HH:mm:ss");
        Date date1 = format.parse(time1);
        Date date2 = format.parse(time2);
        long difference = date2.getTime() - date1.getTime();
        return  difference/1000;
    }
    public JSONObject calculateSpeed(List<EntityPoint> lPnts) throws IOException, ParseException, java.text.ParseException {
        int i=0;
        EntityPoint fPnt;
        EntityPoint sPnt;
        List<Double> lSpeed=new ArrayList<>();
        List<EntityPoint> duplicatePnts= new ArrayList<>();
        for(i=0;i< lPnts.size()-1;i++) {
            fPnt = lPnts.get(i);
            sPnt = lPnts.get(i+1);
        Long  timeDiff=  calculateInterval(sPnt.getTimeFirst(),fPnt.getTimeFirst());
           double dist=calculateDistance(Double.parseDouble(fPnt.getLongs()), Double.parseDouble(fPnt.getLats()), Double.parseDouble(sPnt.getLongs()), Double.parseDouble(sPnt.getLats()));
                double speed=dist/timeDiff;
                double speedKMPH=speed/3.6;
                sPnt.setSpeed(speedKMPH);
                lSpeed.add(speedKMPH);
        }
          double maxSpeed=Collections.max(lSpeed);
        double avgSpeed = lSpeed.stream().mapToDouble(doub->doub).average().orElse(0.0);
        JSONObject resultJson=new JSONObject();
        resultJson.put("maxSpeed", maxSpeed);
        resultJson.put("avgSpeed", avgSpeed);
    return resultJson;
    }
    public  JSONObject compareTwoTimeStamps(java.sql.Timestamp currentTime, java.sql.Timestamp oldTime)
    {
        long milliseconds1 = oldTime.getTime();
        long milliseconds2 = currentTime.getTime();

        long diff = milliseconds2 - milliseconds1;
        long diffSeconds = diff / 1000;
        long diffMinutes = diff / (60 * 1000);
        long diffHours = diff / (60 * 60 * 1000);
        long diffDays = diff / (24 * 60 * 60 * 1000);
        JSONObject resultJson=new JSONObject();
        resultJson.put("seconds", diffSeconds);
        resultJson.put("minutes", diffMinutes);
        resultJson.put("hours", diffHours);
        resultJson.put("days", diffDays);
        return resultJson;
    }
    public void findAndProcessDuplicates(List<EntityPoint> lPnts) throws IOException, ParseException {
        int i=0;
        EntityPoint curPnt;
        EntityPoint nxtPnt;

        List<EntityPoint> duplicatePnts= new ArrayList<>();
        for(i=0;i< lPnts.size()-1;i++) {
            curPnt = lPnts.get(i);
            nxtPnt = lPnts.get(i+1);
            if((curPnt.getLats().equals(nxtPnt.getLats()) ) && (curPnt.getLongs().equals(nxtPnt.getLongs()) ) ){
                nxtPnt.setDuplicate(true);
                duplicatePnts.add(nxtPnt);
                lPnts.remove(nxtPnt);
                i--;
            }
        }

    }
    public void findAndProcessOutliers(List<EntityPoint> lPnts,int d,int sampleSize) throws IOException, ParseException {
        Logger logger = Logger.getLogger("MyLog");
        FileHandler fh;
        try {
            fh = new FileHandler("D:\\fullstackhateoas_backend_s\\src\\main\\java\\io\\agileintelligence\\fullstackhateoas_backend\\domain\\MyLogFile.log");
            logger.addHandler(fh);
            MyFormatter formatter = new MyFormatter();
            fh.setFormatter(formatter);
            logger.info("My first log");
        } catch (SecurityException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        String myspace = "  . . .  ";


        Stack<Integer> indexes = new Stack<Integer>();
        int i=0;
        int j=0;
        int outlierIndex = 0;
        int outlierCount =0;
        int it=0;
        int lastAToJSize =0;
        List<EntityPoint> outlierPnts= new ArrayList<>();



///////////////////////////////////////////////////////////////////////////////////

        while (it < lPnts.size()-2) {
            if(outlierPnts.size()>=2*sampleSize){
                List<EntityPoint> reversOfOutliersPnts= new ArrayList<>();
                for(i=outlierPnts.size()-1;i>=0;i--)
                    reversOfOutliersPnts.add(outlierPnts.get(i));
                findAndProcessOutliers(reversOfOutliersPnts,d,sampleSize);
                logger.info("Return From Recursive");
                outlierPnts.clear();
                it++;//move too much forward
            }
            Boolean outlierStatus = false;
            EntityPoint outLierPnt;
            EntityPoint normalPnt;
            EntityPoint subtitudePnt;
            List<EntityPoint> ATOJ= new ArrayList<>();
            List<EntityPoint> others= new ArrayList<>();
            List<Double> ATTOJT= new ArrayList<>();
            List<Double> othersT= new ArrayList<>();

            Double MAXT=0.0;
            Double MINT=0.0;
            Double avgOfOthersT=0.0;
            EntityPoint MAX;
            int maxIndex=0;
            EntityPoint fPnt,sPnt;
            double sum=0.0;
            double[] arrSum= new double[sampleSize];

            for(i=0;i<sampleSize;i++){
                if (it < lPnts.size())
                    ATOJ.add(lPnts.get(it++));
                else
                    break;
            }

            for(i=0;i< ATOJ.size();i++) {
                fPnt = ATOJ.get(i);
                for (j = 0; j <ATOJ.size(); j++) {
                    sPnt = ATOJ.get(j);
                    sum += calculateDistance(Double.parseDouble(fPnt.getLongs()), Double.parseDouble(fPnt.getLats()), Double.parseDouble(sPnt.getLongs()), Double.parseDouble(sPnt.getLats()));
                }
                arrSum[i]=sum;
                sum = 0.0;
            }
            for(i=0;i<ATOJ.size();i++)
                ATTOJT.add(arrSum[i]);
            for(i=0;i<ATOJ.size();i++)
                arrSum[i]=0.0;
            MAXT = Collections.max(ATTOJT);
            MINT = Collections.min(ATTOJT);
            maxIndex = ATTOJT.indexOf(MAXT);
            MAX = ATOJ.get(maxIndex);

            others = ATOJ.stream().filter(p->p.getId() != MAX.getId()).collect(Collectors.toList());
            for(i=0;i< others.size();i++) {
                fPnt = others.get(i);
                for (j = 0; j <others.size(); j++) {
                    sPnt = others.get(j);
                    sum += calculateDistance(Double.parseDouble(fPnt.getLongs()), Double.parseDouble(fPnt.getLats()), Double.parseDouble(sPnt.getLongs()), Double.parseDouble(sPnt.getLats()));
                }
                arrSum[i]=sum;
                sum = 0.0;
            }
            for(i=0;i<others.size();i++)
                othersT.add(arrSum[i]);
            for(i=0;i<others.size();i++)
                arrSum[i]=0.0;


            Double avgOfOthersT2 = othersT.stream().mapToDouble(doub->doub).average().orElse(0.0);
            for(i=0; i < othersT.size();i++){
                sum+= avgOfOthersT = othersT.get(i);
            }
            avgOfOthersT = sum / othersT.size();
            sum = 0.0;
            Double diff = MAXT - avgOfOthersT2;
            if(MAXT/avgOfOthersT2 > 4  ||  MAX.getSateLite() < 4)
                outlierStatus = true;
            if(MAX.getSateLite() > 11)// && MAXT/avgOfOthersT2 < 10)
                outlierStatus = false;

            if(outlierStatus){
                //ATOJ.set(ATTOJT.indexOf(MAXT) , ATOJ.get(ATTOJT.indexOf(MINT)) );
                outLierPnt = ATOJ.get(ATTOJT.indexOf(MAXT));
                //subtitudePnt = ATOJ.get(ATTOJT.indexOf(MINT));
                //lPnts.set(lPnts.indexOf(outLinePnt),subtitudePnt);
                if(d==1)
                    outLierPnt.setOutlier1(true);
                if(d==2)
                    outLierPnt.setOutlier2(true);
                lPnts.remove(lPnts.indexOf(outLierPnt));
                outlierPnts.add(outLierPnt);
                outlierCount++;
                lastAToJSize = ATOJ.size();
//                logger.info("it=" + it + myspace  +"  MAX= "+  MAX.getId() + myspace + MAX.getLats() + myspace + MAX.getLongs()+  myspace + MAX.getSateLite() + myspace + MAXT/avgOfOthersT2+  "  ***GOT***");
                if(it < lPnts.size())
                    it-=ATOJ.size();
                else
                    it -= ATOJ.size() - 1;
            }else {
                for (i = 0; i < ATOJ.size(); i++){//its useful for recursive call
                    if(d==1)
                        ATOJ.get(i).setOutlier1(false);
                    if(d==2)
                        ATOJ.get(i).setOutlier2(false);
                }
//                logger.info("ATOJ.size()=         " + ATOJ.size());
//                logger.info("it=" + it + myspace  +"  MAX= "+  MAX.getId() + myspace + MAX.getLats() + myspace + MAX.getLongs()+ myspace + MAX.getSateLite() + myspace + MAXT/avgOfOthersT2);

                it -= ATOJ.size() - 1;
            }
        }


        return;


    }

    public String testMethod() throws IOException, ParseException {
        JSONObject jobj = new JSONObject();
        String path = "C:\\Users\\cc\\IdeaProjects\\fullstackhateoas_backend\\src\\main\\java\\io\\agileintelligence\\fullstackhateoas_backend\\domain\\JSONExample.json";
        Object obj  = new JSONParser().parse(new FileReader(path));
        JSONObject jo = (JSONObject) obj;
        jo = (JSONObject) jo.get("deviceId");

        JSONArray ja = (JSONArray) jo.get("tracks");
        jo = (JSONObject)ja.get(0);

        ja = (JSONArray) jo.get("points");






        StringWriter out = new StringWriter();
        ja.writeJSONString(out);

        String jsonText = out.toString();
        return jsonText;

    }


    }


