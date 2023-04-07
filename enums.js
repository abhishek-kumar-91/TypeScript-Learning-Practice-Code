//enums came for to restric some features on project like wishlist, cart add and something that etc
// const AISLE = 0 THIS IS NOT GOOD TO DO THAT 
// const MIDDEL = 1
// const WINDOW = 2
// if(seat === AISLE){}
//ENUM DECLARATION NOW
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 5] = "FOURTH"; //13
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
