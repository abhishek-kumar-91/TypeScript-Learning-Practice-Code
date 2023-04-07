function addTwo(num: number): number{
return num+2

 //return "hello" avoid this error simple adding number outof the paranthesis//that return code doesn't return any error
}

function getUpper(val: string){
    return val.toUpperCase();
}



function signUpUser(name: string, email: string, password: number, isPaid: boolean){
    
}


let loginUser = (name: string, email: string, isPaid: boolean = false) =>{

}

loginUser("Abhi", "abhi@gmail.com",)

signUpUser("Abhishek", "abhishek@gmail.com", 4329339, true)

getUpper("abhishek");

addTwo(5)



// function getValue(myVal: number){
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }


const getHello = (s: string):string =>{
return ""
}


const heros = ["thor", "spiderman", "ironman"]
//const heros = [1, 2, 3]
heros.map((hero): string =>{
    return `hero is ${hero}`
})


function consoleError(errmsg: string): void{
    console.log(errmsg)
    
}

function handleError(err: string):never{
    throw new Error(err);
}
export {}