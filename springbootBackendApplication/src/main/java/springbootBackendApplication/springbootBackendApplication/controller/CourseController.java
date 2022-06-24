package springbootBackendApplication.springbootBackendApplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import springbootBackendApplication.springbootBackendApplication.model.Course;
import springbootBackendApplication.springbootBackendApplication.repository.CourseRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "http://localhost:3000/")
public class CourseController {

    @Autowired
    private CourseRepository coursesRepo;

    @GetMapping("/courses")
    public List<Course> getCourses() {
        return coursesRepo.findAll();
    }

    @GetMapping("/courses/{id}")
    public Course getCourse(@PathVariable Integer id) {
        Optional<Course> optionalCourse = coursesRepo.findById(id);
        Course selectedCourse = null;
        if (optionalCourse.isPresent()) {
            selectedCourse = optionalCourse.get();
        }
        return selectedCourse;
    }

    @PostMapping("/course")
    public Course createCourse(@RequestBody Course newCourse) {
        coursesRepo.save(newCourse);
        return newCourse;
    }
}
