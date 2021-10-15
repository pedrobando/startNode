const account = require('./account');

function getBalance(){
 return {balance};
}

function withdraw(amount, getBalance()){
    return getBalance() - amount;

}

function deposit(amount, getBalance()){
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