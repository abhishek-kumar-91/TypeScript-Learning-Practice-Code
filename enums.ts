//enums came for to restric some features on project like wishlist, cart add and something that etc

// const AISLE = 0 THIS IS NOT GOOD TO DO THAT 
// const MIDDEL = 1
// const WINDOW = 2

// if(seat === AISLE){}


//ENUM DECLARATION NOW

const enum SeatChoice {
    AISLE = "aisle",  //10
    MIDDLE = 3,        //11
    WINDOW,         //12
    FOURTH          //13
}

const hcSeat = SeatChoice.AISLE

