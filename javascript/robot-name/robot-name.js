// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

let nameList = {};

export class Robot {
  constructor() {
    letters.forEach(letter=>{
      // letter of 1st letter of name
      letters.forEach(char=>{
        // char for 2nd letter of name
        for(let i=000;i<1000; i++){
          nameList[letter+char+i] = 1;
        }
      })
    });
    this.name = nameList[Math.floor(Math.random() * Object.keys(nameList).length)];
  }

  generateAllNames(){
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    letters.forEach(letter=>{
      // letter of 1st letter of name
      letters.forEach(char=>{
        // char for 2nd letter of name
        for(let i=000;i<1000; i++){
          nameList[letter+char+i] = 1;
        }
      })
    })
  }

  getRandomFrom(list) {
    let randomValue = list[Math.floor(Math.random() * list.length)]
    return randomValue
  }

  createName(){
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    return this.getRandomFrom(letters) + this.getRandomFrom(letters) + this.getRandomFrom(numbers) + this.getRandomFrom(numbers) + this.getRandomFrom(numbers);
  }

  getUniqueName() {
    let robotName = this.createName();
    while(nameList.includes(robotName))
      robotName = this.createName();
    nameList.push(robotName);
    return robotName;
  }
  
  getName() {
    return this.name;
  }
  reset() {
    this.name = this.getUniqueName();
  }
}

Robot.releaseNames = () => {
  nameList = []
 };
