# full-stack-project

Final Weeks

Overview
To solidify the concepts we’ve covered in Java, Spring, MySQL, & React you’re going to build a
full-stack web application which combines these technologies. The application needs to be able
to CRUD a particular database and will be based on a course and students structure 😊

Steps

#1 Build your new react frontend
In our example, we’ll use ‘courses’ as our resource we’re going to CRUD. Start by running 'npx
create-react-app courseology-frontend' to generate a new react project. Start by creating a home page to show courses fetched via GET /courses

#2 – Generate a Java Backend for your Frontend
Generate a new Java Spring backend via https://start.spring.io. Make sure to select “Maven
Project”, “Java v11”, and “Spring Web,MySQL Driver,Spring Data JPA” dependencies. Once you
have this running, create a controller called “CourseController” which responds with some data.

#3 – Create a page for showing each individual course/product/review
The data for this should be available from GET courses/{courseId}

#4 – Create a page for people to add their courses
The form should send data to the POST course and return the newly created resource or
resource Id. Remember to use a 201 status code for Accepted

#5 – What's next?.. Well that’s up to you...
Consider adding DELETE functionality so courses can be removed? Perhaps a
“like/favourite/save” button which saves the course and can be seen on a “favourites” page? Or
review your UI/Look-and-feel by researching designs on dribbble.com to improve upon your
frontend?

Specifications
Setup
- Make a folder called “full-stack-project”
- Inside you should have 2 sub folders/apps
  - a React app
  - a SprintBoot app

Safety
- You are fine to commit your week in the beginning, however remember that once you get
onto your database connection you need to abstract out your password(s) into a file that
isn't git tracked
- No context related to the bank
  - Ids
  - Emails
  - Titles
  - etc

Data Structure
- I would advise you to think of your data structure first, think....
  - What should a student/user have (name, email, interestedIn etc)
  - What should a course have(name, category, completionTime, price, syllabus,
author etc)
  - You can use something like MURAL to plan out your structure

We’ll review how everyone is progressing with this challenge, but for now....Good luck!