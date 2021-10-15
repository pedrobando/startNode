const PromptSync = require('prompt-sync')();


function getBalance(){
 const { bal } = require('./account');
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

function validatePin(){
    inputPin = PromptSync("Welcome! Please enter your account's 4 digit pin.");
    const { pin } = require('./account');
    if(pin == inputPin){
        const { bal } = require('./account');
        return true
    }
    else{
        console.log("Invalid pin. Please try again");
        return validatePin();
    }
    
}

module.exports = {
    getBal:     getBalance,
    withdraw:   withdraw,
    deposit:    deposit,
    valPin:     validatePin
}