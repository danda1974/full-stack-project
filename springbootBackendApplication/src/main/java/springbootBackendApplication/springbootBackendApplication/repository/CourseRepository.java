package springbootBackendApplication.springbootBackendApplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import springbootBackendApplication.springbootBackendApplication.model.Course;

public interface CourseRepository extends JpaRepository<Course, Integer> {
}
