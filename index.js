#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};
const wellcome = async () => {
    const wellcomeText = chalkAnimation.rainbow("** =========== Welcome To Number Guess Game =========== **");
    await sleep();
    wellcomeText.stop;
};
const check = async () => {
    const systemNbr = Math.floor(Math.random() * 10);
    const userNbr = await inquirer.prompt({
        type: "number",
        name: "userNber",
        message: "Enter Your Number",
    });
    if (systemNbr === userNbr.userNber) {
        console.log(chalk.greenBright("Mission Passed Respect You Win"));
    }
    else {
        console.log(chalk.red("Mission Failed Try Again"));
    }
};
async function wantTocontinu() {
    do {
        await wellcome();
        await check();
        var restart = await inquirer.prompt({
            name: "againplay",
            type: "input",
            message: "Want to Play Again",
        });
    } while (restart.againplay === "y" || restart.againplay === "Y");
}
chalk.greenBright(wantTocontinu());
