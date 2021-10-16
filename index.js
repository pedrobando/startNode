"use strict";

const PromptSync = require('prompt-sync')();
const { getBal, deposit, withdraw, valPin } = require('./atm');
const { money } = require('./money');

function logIn(){
    let inputPinned = PromptSync("Welcome! Please enter your account's 4 digit pin.");
    if(valPin(inputPinned) === true){
        let balance = getBal();
        return displayOptions(balance);
    }
    else{
        console.log("\nInvalid pin. Please try again. \n");
        return logIn();
    }
}

function displayOptions(balance){
    console.log("\n \n Welcome. Please type one of the following options: 'balance', 'withdraw', 'deposit', 'exit'. \n");
    let menuChoice = PromptSync();
    switch(menuChoice){
        case 'balance':
            console.log(`\n Your balance is ${money.format(balance)} \n`);
            return displayOptions(balance);
        case 'deposit':
            console.log(" \n There is a $1.75 charge per transaction. \n How much money would you like to deposit? ")
            let depositAmount = parseInt(PromptSync());
            balance = deposit(depositAmount, balance);
            console.log(`\n Deposit successful. Your balance is now ${money.format(balance)}`);
            return displayOptions(balance);
        case 'withdraw':
            console.log("\n There is a $1.75 charge per transaction. \n How much money would you like to withdraw?");
            let withdrawAmount = parseInt(PromptSync());
            balance = withdraw(withdrawAmount, balance);
            console.log(`\nWithdrawal successful. You balance is now ${money.format(balance)}`);
            return displayOptions(balance);
        case 'exit':
            return logIn();
    }
}

logIn();