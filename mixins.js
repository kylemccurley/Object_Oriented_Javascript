let professional = {
  payTax() {
    console.log(`${this.firstName} ${this.lastName} is paying taxes.`);
  },

  invoice() {
    console.log(`${this.firstName} ${this.lastName} is billing customer.`);
  }
}

function delegate(callingObject, methodOwner, methodName) {
  const args = Array.prototype.slice.call(arguments, 3);
  return () => methodOwner[methodName].apply(callingObject, args);
}

function extend(obj, mixIn) {
  for (let  [key, value] of Object.entries(mixIn)) {
    obj[key] = delegate(obj, mixIn, key);
  }

  return obj;
}

function Person(first, last, age, gender) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`
}

Person.prototype.eat = () => {
  console.log('Eating');
}

Person.prototype.communicate = () => {
  console.log('Communicating');
}

Person.prototype.sleep = () => {
  console.log('Sleeping');
}

function Doctor(first, last, age, gender, specialization) {
  Person.call(this, first, last, age, gender, specialization);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;
Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
}

function Student(first, last, age, gender, degree) {
  Person.call(this, first, last, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function() {
  console.log('Studying');
}

function GraduateStudent(first, last, age, gender, degree, gradDegree) {
  Student.call(this, first, last, age, gender, degree);
  this.graduateDegree = gradDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;
GraduateStudent.prototype.research = function() {
  console.log('Researching');
}

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function() {
  console.log('Teaching');
}

const doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), professional);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'S
doctor.diagnose();                         // logs 'Diagnosing'

const professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), professional);
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

professional.invoice = function() {
  console.log(`${this.fullName()} is Asking customer to pay`);
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'
