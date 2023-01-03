var slot = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var randSpin1 = 0;
var randSpin2 = 0;
var randSpin3 = 0;
const betDisplay = document.getElementById('bet-display');
const betAmount = document.getElementById('bet-amount');
var balance = 1000;
bet = 0;

// These functions spin the slot machinine
function spinFunction(){
    spinSlot1();
    spinSlot2();
    spinSlot3();
}

function spinSlot1(){
    let randSpin1 = Math.floor(Math.random() * slot.length);
    if(randSpin1 == 11){
        document.getElementById('slot-JS1').textContent = 'J';
    }
    else if(randSpin1 == 12){
        document.getElementById('slot-JS1').textContent = 'Q';
    }
    else if(randSpin1 == 13){
        document.getElementById('slot-JS1').textContent = 'K';
    }
    else if(randSpin1 == 14){
        document.getElementById('slot-JS1').textContent = 'A';
    }
    else{
        document.getElementById('slot-JS1').textContent = randSpin1;
    };
};

function spinSlot2(){
    let randSpin2 = Math.floor(Math.random() * slot.length);
    if(randSpin2 == 11){
        document.getElementById('slot-JS2').textContent = 'J';
    }
    else if(randSpin2 == 12){
        document.getElementById('slot-JS2').textContent = 'Q';
    }
    else if(randSpin2 == 13){
        document.getElementById('slot-JS2').textContent = 'K';
    }
    else if(randSpin2 == 14){
        document.getElementById('slot-JS2').textContent = 'A';
    }
    else{
        document.getElementById('slot-JS2').textContent = randSpin2;
    };
};

function spinSlot3(){
    let randSpin3 = Math.floor(Math.random() * slot.length);
    if(randSpin3 == 11){
        document.getElementById('slot-JS3').textContent = 'J';
    }
    else if(randSpin3 == 12){
        document.getElementById('slot-JS3').textContent = 'Q';
    }
    else if(randSpin3 == 13){
        document.getElementById('slot-JS3').textContent = 'K';
    }
    else if(randSpin3 == 14){
        document.getElementById('slot-JS3').textContent = 'A';
    }
    else{
        document.getElementById('slot-JS3').textContent = randSpin3;
    };
};

// This function displays the bet below the betbox

function displayBet(){
    betDisplay.textContent = betAmount.value;
    bet = betAmount.value;
};

// This function displays the balance amount at the top

function displayBalance(){
    document.getElementById('balance-amount').innerHTML = balance;
};

// These functions check for a winner and add to the balance

let didYouWin = 0;

function evalWinnings(){

    // Needs to be reset after the last spin
    didYouWin = 0;

    checkUnders();
    checkOvers();
    ifYouDidNotWin();
    checkTrips()
};

function checkUnders(){
    slot1content = document.getElementById('slot-JS1').innerHTML;
    slot2content = document.getElementById('slot-JS2').innerHTML;
    slot3content = document.getElementById('slot-JS3').innerHTML;
    if(slot1content < 10 && slot2content < 10 && slot3content < 10){
        balance += (bet * 2);
        didYouWin++;
        turnGreen();
    };
};

function checkOvers(){
    slot1content = document.getElementById('slot-JS1').innerHTML;
    slot2content = document.getElementById('slot-JS2').innerHTML;
    slot3content = document.getElementById('slot-JS3').innerHTML;
    slot1Over = false;
    slot2Over = false;
    slot3Over = false;
    if(slot1content == 10 || slot1content == 'J' || slot1content == 'Q' || slot1content == 'K' || slot1content == 'A'){
        slot1Over = true;
    };
    if(slot2content == 10 || slot2content == 'J' || slot2content == 'Q' || slot2content == 'K' || slot2content == 'A'){
        slot2Over = true;
    };
    if(slot3content == 10 || slot3content == 'J' || slot3content == 'Q' || slot3content == 'K' || slot3content == 'A'){
        slot3Over = true;
    };
    if(slot1Over == true && slot2Over == true && slot3Over == true){
        balance += (bet * 2)
        didYouWin++;
        turnGreen();
    };

};

function checkTrips(){
    slot1content = document.getElementById('slot-JS1').innerHTML;
    slot2content = document.getElementById('slot-JS2').innerHTML;
    slot3content = document.getElementById('slot-JS3').innerHTML;
    if(slot1content == slot2content && slot2content == slot3content){
        balance += (bet * 50)
        didYouWin++;
        turnGreen();
    }
}

function ifYouDidNotWin(){
    if(didYouWin == 0){
        balance = (balance - bet);
    };
};

// This function makes the slots turn green when there is a winner, and white after each spin

function turnGreen(){
    document.getElementById('slot-JS1').style.backgroundColor = 'green';
    document.getElementById('slot-JS2').style.backgroundColor = 'green';
    document.getElementById('slot-JS3').style.backgroundColor = 'green';
}

function turnWhite(){
    document.getElementById('slot-JS1').style.backgroundColor = 'white';
    document.getElementById('slot-JS2').style.backgroundColor = 'white';
    document.getElementById('slot-JS3').style.backgroundColor = 'white';
}

