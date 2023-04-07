//creating newuser that hold some properties username discount code etc

//interface declaration

interface User  {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
   // startTrail: () => string //that assigned method / function
   startTrail(): string,
   getCoupon(couponname: string): number //couponname is just a reference that take string value
}




interface User{
    githubToken: string
}


//most important for interview
interface Admin extends User{
role: "admin" | "TA" | "Learner"
}






const abhishek: User = {dbId: 22,email: "a@gmail.com", userId: 2211,githubToken: "as", startTrail: () =>{
    return "trail started"
}, getCoupon: (name: "abhishek") =>{
    return 10
}
}





abhishek.email = "c@gmail.com"

//abhishek.dbID = 33