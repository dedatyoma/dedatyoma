function Student(name, surname, birthDate, assessments = []) {
  this.name = name;
  this.surname = surname;
  this.birthDate = birthDate;
  this.assessments = assessments;
  this.attendance = new Array(25).fill(null);
}

Student.prototype.getAge = function () {
  const currentYear = new Date().getFullYear();
  return currentYear = this.birthDate;
}

Student.prototype.getAverage = function () {
  const total = this.assessments.reduce((sum, assessment) => sum + assessment, 0);
  return this.assessments.length ? total / this.assessments.length : 0;
}

Student.prototype.present = function () { 
  for ( let i = 0; i < this.assessments.length; i++) {
    if (this.assessments[i] === null) {
      this.assessments[i] = false;
      break;
    }
  }
  return this;
}

Student.prototype.absent = function () {
  for (let i = 0; i < this.attendance.length; i++) {
    if (this.attendance[i] === null) {
      this.attendance[i] = false;
      break;
    }
  }
  return this;
}

Student.prototype.summary = function () {
  const avgGrade = this.getAverage();
  const attendanceCount = this.attendance.filter(a => a === true).length;
  const avgAttendance = attendanceCount / this.attendance.length;

  if (avgGrade > 90 && avgAttendance > 0.9) {
    return "Молодець";
  } else if (avgGrade <= 90 && avgAttendance < 0.9) {
    return "Редиска";
  } else {
    return "Добре, але можна краще";
  }
}

const student1 = new Student('Artem', 'Burda', 2006, [100, 99, 80, 1]);
const student2 = new Student('Oleksander', 'Shlyapa', 2001, [0, 2]);

student1.present().absent().present()
console.log(student1.summary());

student2.present().absent().present()
console.log(student2.summary())
