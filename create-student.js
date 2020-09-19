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

foo = createStudent('Foo', '1st');
foo.info();
// = Foo is a 1st year student
foo.listCourses();
// = [];

foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// = [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]

foo.addNote(101, 'Fun Course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// = Math: Fun Course; Remember to study for algebra

foo.addNote(102, 'Difficult Subject');
foo.viewNotes();
// = Math: Fun Course; Remember to study for algebra
// = Advanced Math: Difficult Subject

foo.updateNote(101, 'Fun course');
foo.viewNotes();
// = Math: Fun Course
// = Advanced Math: Difficult Subject
