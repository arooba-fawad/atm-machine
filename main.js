#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 1421;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "please enter your pincode",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pincode!");
    let operationAns = await inquirer.prompt([
        {
            name: "operations",
            message: "please select an option",
            type: "list",
            choices: ["withdraw", "check balance"],
        }
    ]);
    if (operationAns.operations === "withdraw") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                message: "select a withdraw method",
                type: "list",
                choices: ["fast cash", "enter amount"],
            }
        ]);
        if (withdrawAns.withdrawMethod === "fast cash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    message: "select amount",
                    type: "list",
                    choices: ["5000", "10000", "15000", "20000"],
                }
            ]);
            if (fastcashAns.fastcash > myBalance) {
                console.log("insufficient balance");
            }
            else {
                myBalance -= fastcashAns.fastcash;
                console.log(`${fastcashAns.fastcash}withdraw sucessfully`);
                console.log(`your remaining balance is${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "enter amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "enter your withdraw amount",
                    type: "number",
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("insufficient balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount}withdraw sucessfully`);
                console.log(`your remaining balance is ${myBalance}`);
            }
        }
    }
    else if (operationAns.operations === "check balance") {
        console.log(`your current balance is ${myBalance}`);
    }
}
else {
    console.log("incorrect pincode!");
}
