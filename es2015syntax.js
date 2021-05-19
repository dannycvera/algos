class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName} and your year is ${this.grade}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} ${
      this.tardies === 1 ? "time" : "times"
    }!`;
  }
  addScore(score) {
    this.scores.push(score);

    return this.scores;
  }
  calculateAverage() {
    // let sum = 0;
    // let i = 0;
    // while (i < this.scores.length) {
    //   sum += this.scores[i];
    //   i++;
    // }
    // let sum = this.scores.reduce((a, b) => a + b);
    // return `Your average score is ${sum / this.scores.length}`;
    return `Your average score is ${
      this.scores.reduce((a, b) => a + b) / this.scores.length
    }`;
  }
}

let firstStudent = new Student("Colt", "Steele", 3);
let secondStudent = new Student("Blue", "Steele", 6);

console.log(firstStudent, secondStudent);
