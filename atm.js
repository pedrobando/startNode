const PromptSync = require('prompt-sync')();
const { bal, pin } = require('./account');

function getBalance(bal){
 return bal;
}

function withdraw(amount, balance){
    newBalance = balance - amount;
    return newBalance;

}

function deposit(amount, balance){
    newBalance = balance + amount;
    return newBalance;
}

function validatePin(pin, inputPin){
    if(pin == inputPin){
        return true
    }
    else{
        console.log("Invalid pin. Please try again");
        return validatePin(pin, inputPin);
    }
    
}

module.exports = {
    getBal:     getBalance,
    withdraw:   withdraw,
    deposit:    deposit,
    valPin:     validatePin
}