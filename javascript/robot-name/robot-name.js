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
    return list[Math.floor(Math.random() * list.length)]
  }

  createName(){
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    return this.getRandomFrom(letters) + this.getRandomFrom(letters) + this.getRandomFrom(numbers) + this.getRandomFrom(numbers) + this.getRandomFrom(numbers);
  }

  getUniqueName() {
    let name = this.createName();
    while(nameList.includes(name))
      name = this.createName();
    nameList.push(name);
    return name;
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
