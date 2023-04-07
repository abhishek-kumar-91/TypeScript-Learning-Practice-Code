// const User ={
//     name: "Abhishek",
//     email: "abhishek@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "Abhishek", isPaid: false, email: "abhishek@gmail.com"}

// createUser(newUser)

// function createCourse():{name: string, price: number}{
//     return {name: "Abhishek", price: 499}
// }




//type alias type is typescript
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// // type Mystring = string;

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})




//readonly
type User = {
    readonly _id: string    //_id is simple string //readonly provide to user to read only not to write any thin on _id
    name: string
    email: string
    isActive: boolean
}

let myUser: User = {

    _id: "123",
    name: "A",
    email: "a@agmail.com",
    isActive: false

}

type cardNumber = {
    cardNumber: string
}

type cardDate ={
    cardDate: string
}

type cardDetails = cardNumber & cardDate &{ //& ampersand work like addition the objects
    cvv: number
}

myUser.email = "abhishek@gmail.com";
// myUser._id = "123"  that is not assigned the value because that hold the readonly function so I will not write or assigned the value



export {}