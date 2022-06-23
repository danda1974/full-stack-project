package springbootBackendApplication.springbootBackendApplication.model;

import org.springframework.web.bind.annotation.RestController;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    private String startdate;
    private String starttime;
    private String duration;
    private String location;
    private String summary;
    private String price;
    private String category;
    private String syllabus;
    private String teacher;

    public Course() {
    }

    public Course(String name, String startdate, String starttime, String duration, String location, String summary, String price, String category, String syllabus, String teacher) {
        this.name = name;
        this.startdate = startdate;
        this.starttime = starttime;
        this.duration = duration;
        this.location = location;
        this.summary = summary;
        this.price = price;
        this.category = category;
        this.syllabus = syllabus;
        this.teacher = teacher;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStartdate() {
        return startdate;
    }

    public void setStartdate(String startdate) {
        this.startdate = startdate;
    }

    public String getStarttime() {
        return starttime;
    }

    public void setStarttime(String starttime) {
        this.starttime = starttime;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSyllabus() {
        return syllabus;
    }

    public void setSyllabus(String syllabus) {
        this.syllabus = syllabus;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }
}

//Ich brauche die toString Methode nicht mehr, da ich mit @RestController arbeite. Dies war nur ein Zwischenschritt, falls ich die Ausgabe in der Konsole sehen will.
//@Override
//public String toString() {
//    return "Course{" +
//            "id='" + id + '\'' +
//            ", name='" + name + '\'' +
//            ", startDate=" + startDate +
//            ", startTime='" + startTime + '\'' +
//            ", duration='" + duration + '\'' +
//            ", location='" + location + '\'' +
//            ", summary='" + summary + '\'' +
//            ", price='" + price + '\'' +
//            ", category='" + category + '\'' +
//            ", syllabus='" + syllabus + '\'' +
//            ", teacher='" + teacher + '\'' +
//            '}';
//}