function getBalance(){
 const { bal } = require('./account');
 return bal;
}

function withdraw(amount, getBalance, newBalance){
    newBalance += getBalance() - amount;
    return newBalance;

}

function deposit(amount, getBalance){
    return getBalance() + amount;
}

function validatePin(inputPin, pin){
    if(inputPin == pin){
        return true;
    }
    else{
        console.log("Invalid Pin. Please enter pin again.");
        return false;
    }

}

module.exports = {
    getBal:     getBalance,
    withdraw:   withdraw,
    deposit:    deposit,
    valPin:     validatePin
}