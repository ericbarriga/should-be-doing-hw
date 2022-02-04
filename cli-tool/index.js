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

//
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
//
async function question2() {
    const answer = await inquirer.prompt({
        name: 'question1',
        type: 'list',
        message: 'why do you want to kill yourself????',
        choices: [
            'the housing market????',
            'the ultra rich not paying taxes',
            'the fact that mannies bitch ass makes it look so easy',
            'boomers ... not you judo steve your cool as fuck 🥋 ',
        ],
    })
    return handleAnswer(answer.question1 == 'the fact that mannies bitch ass makes it look so easy');
}
//
async function question3() {
    const answer = await inquirer.prompt({
        name: 'question1',
        type: 'list',
        message: 'why do you want to kill yourself????',
        choices: [
            'the fact that they dont got money for teacher but they got money for war ... is that pac???',
            'the fact that your stuck all day on somting and 😸rhys😸 and 🤓becca🤓 say its that word you missspelled',
            'that the prison system is for profit and lobby the goverment to keep them full ',
            'the fact that they blame imigrants for job loss but some big wig just sent all the jobs over seas and want to out source to more',
        ],
    })
    return handleAnswer(answer.question1 == 'the fact that your stuck all day on somting and 😸rhys😸 and 🤓becca🤓 say its that word you missspelled');
}

// 

async function question4() {
    const answer = await inquirer.prompt({
        name: 'question1',
        type: 'list',
        message: 'why do you want to kill yourself????',
        choices: [
            'the fact that some guy with a brian injury gets it faster then i do ..<3 you matt please wear your helmet 🪖 🚵🏻',
            'that steven Donziger was prosecuted by a private attorney/da because he won a case againt chevron in ecuador',
            'that your still wating for the dip to go back up xrp to the moon',
            'that big banks got a bail out and they will get another one this was typed on 2022 ',
        ],
    })
    return handleAnswer(answer.question1 == 'the fact that some guy with a brian injury gets it faster then i do ..<3 you matt please wear your helmet 🪖 🚵🏻');
}

///
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


await welcome()
await askName()
await question1()
await question2()
await question3()
await question4()
await winner()

