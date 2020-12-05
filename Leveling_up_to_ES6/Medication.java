import java.text.DateFormat;
import java.util.Date;
import java.util.Calendar;

public class Medication{

    public enum Day {
        Mon, Tue, Wed, Thu, Fri, Sat, Sun
    } 
    public enum Gender {
        Male, Female
    }

    public class MedicationClass {
        DateFormat startDate, currentDate,endDate;
        String dosage;
        private int frequency;
        private List<Day> days;

        public MedicationClass(startDate, endDate, ){
            
        }
    }
    public class Person extends MedicationClass{
        String name, address;
        int age;
        Gender gender;

        public Person(String name, int age, Gender gender, String address){
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.address = address;
        }

        public String getName(){
            return this.name;
        }

        public void setName(String name){
            this.name = name;
        }

        public int getAge(){
            return this.age;
        }

        public void setAge(int age){
            this.age = age;
        }

        public Gender getGender(){
            return this.gender;
        }

        public void setGender( Gender gender){
            this.gender = gender;
        }
    }

        public static void main(String[] args){

            Calender date = new Calender.getInstance();
            Calender date2 = new Calender.getTime();
            // Date newDate = 'Wed Dec 05 23:49:25 CST 2020'; 
            System.out.println(date);
            System.out.println(date2);
        }   

}