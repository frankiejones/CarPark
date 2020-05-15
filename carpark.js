
class Car {
    constructor(regNum){
        this._regNum = regNum;
        this._hours = 0;
        this._charge = 0.00;
    };
    get regNum(){
        return this._regNum;
    };
    get hours(){
        return this._hours;
    };
    get charge(){
        return this._charge;
    };
    increaseHours(){
        this._hours++; // ++increases this._hours by 1
        this._charge += 1.50; // increaseHours function increases the hours by 1 and then will increase the charge by 1.50 for every hour.
    };
};

const pay = (reg, hr) => { //creates a loop using the values for reg and hour below when you call the function pay, so 5 on a loop.
    const car = new Car(reg);
    for (i = 0; i < hr; i++){
        car.increaseHours();
    };
    console.log(`You need to pay £${car.charge} for ${car.hours} hours.`);
};
pay("M7 CAR", 5); //Output: You need to pay £7.5 for 5 hours. M7 CAR is the reg and 5 is the hr in the const pay.
    //Add a subclass for staff, so that staff can provide their staff number, and credits they have left to pay for the car park fees.
//Given a staff member parked for 5 hours as before, show how much it will be charged and remaining balance.
class Staff extends Car {
    constructor(regNum,staffNum, staffCred){ //regNum from above, adding in staffNum and staffCred
        super(regNum); //from above class
        this._staffNum = staffNum;
        this._staffCred = staffCred;
    };
    get staffNo(){ //not sure we need the gets, investigate why we havent called them below and was are using the ._staffNum instead
        return this._staffNum;
    };
    get staffCred(){
        return this._staffCred;
    };
};
const payStaff = (reg, hr, sffNm, sttCred) => { //creates a loop using the values for reg and hour below when you call the function pay, so 5 on a loop.
    const car1 = new Staff(reg, sffNm, sttCred ); // new Staff entry using
    for (j = 0; j < hr; j++){
        car1.increaseHours();
    };
    let balance = car1.staffCred - car1.charge;
    if (balance > 0){
    console.log(`You parked for ${car1.hours} hours, which costs £${car1.charge}, you now have ${balance} credits left to use`);
    } else {
    console.log(`You parked for ${car1.hours} hours, which costs £${car1.charge}, you dont have enough staff credits to use`);
    };
};
payStaff("M7 CAR", 4, 6, 7.5);




    