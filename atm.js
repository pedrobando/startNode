const PromptSync = require('prompt-sync')();
const { bal, pin } = require('./account');
let {charges, fee}= require(`./wallet`);

function getBalance(){
    balance = bal;
 return balance;
}

function withdraw(amount, balance){
    newBalance = balance - amount - fee;
    charges += fee;
    return newBalance;

}

function deposit(amount, balance){
    newBalance = balance + amount - fee;
    charges += fee;
    return newBalance;
}

function validatePin(inputPin){
    if(pin == inputPin){
        return true
    }
    else{
        return false;
    }
    
}

module.exports = {
    getBal:     getBalance,
    withdraw:   withdraw,
    deposit:    deposit,
    valPin:     validatePin
}