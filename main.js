#! usr/bin/env node
import inquirer from "inquirer";
let totalBalance = 10000; //Dollar
let pinNumber = 4321;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: "enter your pin"
    }]);
if (pinAnswer.pin === pinNumber) {
    console.log("Congratulation!!! you enter right pin");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "please select option ",
            type: "list",
            choices: ["withdraw", "checkbalance", "Fast Cash"]
        }]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "enter your amount",
            }]);
        if (amountAns.amount > totalBalance) {
            console.log("Insufficient Balance");
        }
        else {
            totalBalance -= amountAns.amount;
            console.log("Your remaining balance is:" + totalBalance);
        }
    }
    else if (operationAns.operation === "checkbalance") {
        console.log("your balance is:" + totalBalance);
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastAmountcash = await inquirer.prompt([{
                name: "Amount",
                message: "Slect Fast Cash Amount",
                type: "list",
                choices: ["2000", "4000", "7000"]
            }]);
        if (fastAmountcash.amount > totalBalance) {
            console.log("Insufficient Balance");
        }
        else
            (totalBalance -= fastAmountcash.Amount);
        {
            console.log("yor remaining balace is:" + totalBalance);
        }
    }
}
else {
    ("No, you enter wrong pin ");
}
