foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
};

bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
};

qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
};

function createStudent(name, year) {
  courses = [];
  notes = [];

  return {
    info() {
      console.log(`${name} is a ${year} year student`);
    },
    
    addCourse(course) {
      courses.push(course);
    },

    listCourses() {
      console.log(courses);
    },

    addNote(courseCode, description) {
      if (notes.some(function(note) {
        return note.code === courseCode;
      })) {
        var note = notes.filter((note) => {
          return note.code === courseCode;
        })[0];
        let course = courses.filter((course) => {
          return (course.code === note.code);
        })[0];
        

        note.name = course.name;
      } else {
        var note = {};
        note.code = courseCode;
        note.name = courses.filter((course) => {
          return course.code === courseCode;
        })[0].name;
      };

      if (!note.descriptions) {
        note.descriptions = [description];
        notes.push(note);
      } else {
        note.descriptions.push(description);
      };
    },

    viewNotes() {
      notes.forEach((note) => {
        console.log(`= ${note.name}: ${note.descriptions.join('; ')}`)
      });
    },

    updateNote(code, description) {
      let note = notes.filter((note) => {
        return note.code === code;
      })[0];

      note.descriptions = [description];
    },
  }
}

let school = function() {
  let students = [];

  return {
    addStudent(...studentArgs) {
      studentArgs.forEach((student) => {
         students.push(student);
      });
    },

    getReportCard(student) {
      student.courses.forEach((course) => {
        console.log(`= ${course.name}: ${course.grade || 'In progress'}`);
      });
    },

    courseReport(courseName) {
      console.log(`= ${courseName} Grades = `)
      let validStudents = 0;
      let sum = 0;
      students.forEach((student) => {
        student.courses.forEach((course) => {
          if (course.grade === undefined) {
            return;
          }
        
          if (course.name === courseName) {
            console.log(`= ${student.name}: ${course.grade}`);
            sum += course.grade;
            validStudents++;
          };
        });
      });

      let average = (sum / validStudents);
      if (!average) {
        console.log(undefined);
      } else {
        console.log('= ---');
        console.log(average);
      }
    },
  };
}();

school.getReportCard(foo);
/*
  = Math: 95
  = Advanced Math: 90
  = Physics: In progress
  courseReport output
*/

school.addStudent(foo, bar, qux);
school.courseReport('Math');
/*
  = Math Grades=
  = foo: 95
  = bar: 91
  = qux: 93
  = ---
  = Course Average: 93
*/

school.courseReport('Advanced Math');
/*
  = Advanced Math Grades=
    = foo: 90
    = qux: 90
    = ---
  = Course Average: 90
*/

school.courseReport('Physics');
  // = undefined

/*
addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
enrollStudent: Enrolls a student in a course.
addGrade: Adds the grade of a student for a course.
getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.

/*
foo;
{
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
}

bar;
{
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
}

qux;
{
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
}
*/
