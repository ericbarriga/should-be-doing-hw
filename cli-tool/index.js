#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

// console.log(chalk.bgGreen('i will get the hang of this you bitch ass  '));


let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const raindowTitle = chalkAnimation.rainbow(
        'do you feel like killing yourself ??? \n'
    );

    await sleep();
    raindowTitle.stop();

    console.log(`
    ${chalk.bgRed('LETS GET STARTED ')}
    🌈 IM A GUY TALKINNG TO YOU THRU THE COMPUTER LETS SEE HOW DEEP THIS DEPRESSION GOES 🌈
    
    `);

}

await welcome()

async function askName() {
    const answer = await inquirer.prompt({
        name: 'name',
        type: 'input',
        message: 'so what do they call you ',
        default() {
            return 'human';
        },

    });
    playerName = answer.name;
}
await askName()

async function question1() {
    const answer = await inquirer.prompt({
        name: 'question1',
        type: 'list',
        message: 'why do you want to kill yourself????',
        choices: [
            'the economy',
            'javacript is hard',
            'american health care system',
            'congresss cant pass a thing to save their lives',
        ],
    })
    return handleAnswer(answer.question1 == 'javacript is hard');
}

await question1()

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('lets see if thats a good enough reason.....').start();
    await sleep();

    if (isCorrect) {
        spinner.success({ text: `of thats a valid reason i guess ${playerName}` });
    } else {
        spinner.error({ text: ` thats not a good enough reason weirdo keep on living ${playerName}!!!!👆🏼👆🏼!!!` })
        process.exit(1);
    }

}

await question2()

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('lets see if thats a good enough reason.....').start();
    await sleep();

    if (isCorrect) {
        spinner.success({ text: `of thats a valid reason i guess ${playerName}` });
    } else {
        spinner.error({ text: ` thats not a good enough reason weirdo keep on living ${playerName}!!!!👆🏼👆🏼!!!` })
        process.exit(1);
    }

}

await question3()

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('lets see if thats a good enough reason.....').start();
    await sleep();

    if (isCorrect) {
        spinner.success({ text: `of thats a valid reason i guess ${playerName}` });
    } else {
        spinner.error({ text: ` thats not a good enough reason weirdo keep on living ${playerName}!!!!👆🏼👆🏼!!!` })
        process.exit(1);
    }

}

await question4()

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('lets see if thats a good enough reason.....').start();
    await sleep();

    if (isCorrect) {
        spinner.success({ text: `of thats a valid reason i guess ${playerName}` });
    } else {
        spinner.error({ text: ` thats not a good enough reason weirdo keep on living ${playerName}!!!!👆🏼👆🏼!!!` })
        process.exit(1);
    }

}


function winner() {
    console.clear();
    const msg = `congrats, those ,reasons, are, good, enough , ${playerName} ! \n lets, go, get, the, rope `;

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    })
}

await winner()

