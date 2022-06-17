package springbootBackendApplication.springbootBackendApplication.model;

public class Course {
    private int id;
    private String name;
    private int startDate;
    private String startTime;
    private String duration;
    private String location;
    private String summary;
    private String price;
    private String category;
    private String syllabus;
    private String teacher;

    public Course(int id, String name, int startDate, String startTime, String duration, String location, String summary, String price, String category, String syllabus, String teacher) {
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.startTime = startTime;
        this.duration = duration;
        this.location = location;
        this.summary = summary;
        this.price = price;
        this.category = category;
        this.syllabus = syllabus;
        this.teacher = teacher;
    }

    public Course() {
    }

    @Override
    public String toString() {
        return "Course{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", startDate=" + startDate +
                ", startTime='" + startTime + '\'' +
                ", duration='" + duration + '\'' +
                ", location='" + location + '\'' +
                ", summary='" + summary + '\'' +
                ", price='" + price + '\'' +
                ", category='" + category + '\'' +
                ", syllabus='" + syllabus + '\'' +
                ", teacher='" + teacher + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getStartDate() {
        return startDate;
    }

    public void setStartDate(int startDate) {
        this.startDate = startDate;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
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
