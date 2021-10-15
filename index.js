const PromptSync = require('prompt-sync');
const { getBal } = require('./atm');
const { money } = require('./money');



function mainMenu(menuChoice){
    menuChoice = PromptSync("Welcome. Please type one of the following options: 'balance', 'withdraw', 'deposit', 'exit'.");
    switch(menuChoice){
        case 'balance':
            console.log(`Your balance is ${money.format(getBal())}`);
            break;
        default:
            mainMenu(menuChoice);
    }
}
mainMenu(menuChoice)

