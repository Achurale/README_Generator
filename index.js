// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path')
// TODO: Create an array of questions for user input
// Description, installation instructions, usage, contributing, tests
const questions = [
    {
        type: 'input',
        message: 'What is the title of your app?',
        name:'title',
    },
    {
        type: 'input',
        message: 'Give me a description of your application.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Write the installation instructions for your application if any.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'How do you use your app?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please list anyone you may need to credit.',
        name: 'credit',
    },
    {
        type: 'list',
        message: 'Which license did you choose?',
        name: 'license',
        choices:['The MIT License', 'The GPL License', 'Apache', 'GNU License', 'N/A'],
    },
    {
        type: 'input',
        message: 'Write down any test instructions for your app.',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username for any questions from users.',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address for any questions from users',
        name: 'email',
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
async function init() {
    try {
    const responses = await inquirer.prompt(questions);
    console.log("Creating README.md file");
    writeToFile("./dist/README.md", generateMarkdown(responses));
    } catch(error) {
        console.error("Error occurred:", error)
    }
}

// Function call to initialize app
init();
