public class TemperatureMonitorClass{
enum BodyLocation{
    MOUTH, EAR, RECTUM, ARMPIT
}

enum RecentPhysicalActivity{
    LOW,HIGH,MEDIUM
}

public static boolean hasFeverCheck(float temperature){
    if(temperature > 100.4){
        return true;
    }
    else{
        return false;
    }
}

public static class TemperatureClass{
    private float temperature; 
    private BodyLocation location;
    private RecentPhysicalActivity activity;

    public TemperatureClass(float temperature, BodyLocation location, RecentPhysicalActivity activity){
        this.temperature = temperature;
        this.location = location;
        this.activity = activity;
    }

    public float getTemperature(){
        return this.temperature;
    }

    public void setTemperature(float temperature){
        this.temperature = temperature;
    }

    public BodyLocation getLocation(){
        return this.location;
    }

    public void setLocation(BodyLocation location){
        this.location = location;
    }

    public RecentPhysicalActivity getActivity(){
        return this.activity;
    }

    public void setActivity(RecentPhysicalActivity activity){
        this.activity = activity;
    }

    public boolean hasFever(){
        boolean yesorno = hasFeverCheck(this.temperature);
        return yesorno;
    }

}

public static void main(String[] args){
    TemperatureClass hP = new TemperatureClass(98.4f, BodyLocation.MOUTH, RecentPhysicalActivity.LOW);
    TemperatureClass sP = new TemperatureClass(102.4f, BodyLocation.MOUTH, RecentPhysicalActivity.LOW);
    System.out.printf("For the healthy patient, their temperature is %.1ff, the location of where the temperature was"
    + " taken was the patient's %s, while their recent physical activaty was %s. This patient %s have a fever.\n",
    hP.getTemperature(), hP.getLocation(), hP.getActivity(),
    hP.hasFever() ? "does" : "does not");
System.out.printf("For the sick patient, their temperature is %.1ff, the location of where the temperature was"
    + " taken was the patient's %s, while their recent physical activaty was %s. This patient %s have a fever.",
    sP.getTemperature(), sP.getLocation(), sP.getActivity(),
    sP.hasFever() ? "does" : "does not");
}
}