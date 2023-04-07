"use strict";
// class User {
//    public email: string   //default is public
//     private name: string   //#is private that used in javascript world
//     readonly city: string = "pune" //only read that 
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }
// abhishek.city = "pune"; not assigned the value
// console.log(abhishek.city);
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    get getAppleEmail() {
        return `Apples ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //set doesn't return any type of data types like void or number etc.
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count shorl be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const abhishek = new User("abhi@gmail.com", "Abhishek");
