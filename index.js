"use strict";

const PromptSync = require('prompt-sync')();
const { getBal, deposit, withdraw, valPin } = require('./atm');
const { money } = require('./money');


if(valPin() === true){
    let balance = getBal();
    displayOptions(balance);
}

function displayOptions(balance){
    let menuChoice = PromptSync("Welcome. Please type one of the following options: 'balance', 'withdraw', 'deposit', 'exit'.");
    switch(menuChoice){
        case 'balance':
            console.log(`Your balance is ${money.format(balance)}`);
            return displayOptions(balance);
        case 'deposit':
            let depositAmount = parseInt(PromptSync(`How much money would you like to deposit? `));
            balance = deposit(depositAmount, balance);
            console.log(`Deposit successful. Your balance is now ${money.format(balance)}`);
            return displayOptions(balance);
        case 'withdraw':
            let withdrawAmount = parseInt(PromptSync(`How much money would you like to withdraw?`));
            balance = withdraw(withdrawAmount, balance);
            console.log(`Withdrawal successful. You balance is now ${money.format(balance)}`);
            return displayOptions(balance);
        case 'exit':
            return valPin();
        default:
            displayOptions(balance);
            break;
    }
}