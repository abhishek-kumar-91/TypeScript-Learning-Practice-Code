//not sure what data types are there used in code


//union data types example in below the line
let score: number | string | boolean = 33

score = "asd"

score = true

type User ={
    name: string;
    id: number
}

type Admin ={
    username: string;
    id: number
}

let abhishek: User | Admin = {name: "Abhishek", id: 334}
abhishek = {username: "hc", id: 334}


// function getDbId(id: number|string){
//     //making some API calls
//     console.log(`DB id is: ${id}`)
// }
getDbId(3)
getDbId("2")

function getDbId(id: number|string){
    if(typeof id === "string"){
        id.toLowerCase()
    }

    
}

//array

const data: number[] | string[]= [1,2,3] //either all the string or number on the array
const data2: number[] | string[]= ["1","2","3"]

const data3: (string | number | boolean)[] = ["1", "2", 3, true]



let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
seatAllotment = "middle"