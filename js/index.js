// const userName = prompt('Enter your name');
// const greetings= 'Hello ' + userName;
// alert(greetings);

// const userAge = parseInt(prompt('Enter your age'));
// const nextAge = userAge + 1;
// alert('Next year you will be ' + nextAge); 

// const userMonthNumber = parseInt(prompt("Enter your month of birth"));
// const dividedUserMonthNumber = userMonthNumber / 2;
// alert(dividedUserMonthNumber); 

// const userAge = parseInt(prompt('Enter your age'));
// if (userAge > 18) {
//     // If true
//     alert('You are adult');
// }
// else {
//     // If false
//     alert('You are child');
// }


function addOne(num) {
    let newNum = num + 1;
    return newNum;
}

let result = addOne(10);
alert(result);
result = addOne(result);
alert(result);

result = Math.sqrt(16);
alert(result);