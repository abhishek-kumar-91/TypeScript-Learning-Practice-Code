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
    protected _courseCount = 1
    readonly city: string = "Jaipur"
 
     constructor(public email: string, public name: string){
       
     }

     get getAppleEmail(): string{   //getter
        return `Apples ${this.email}`
     }

     get courseCount(): number{
      return this.  _courseCount
     }

     //set doesn't return any type of data types like void or number etc.
     set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count shorl be more than 1")
        }
            this._courseCount = courseNum
     }
 }


class SubUser extends User{
    isFamily: boolean = true

    changeCourseCount(){
        this._courseCount = 4
    }
}












 
 const abhishek = new User("abhi@gmail.com", "Abhishek")

