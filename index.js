// npm packages installed
const inquirer = require('inquirer');
const fs = require('fs');
const logoGenerator = require('./utils/logoGenerator');

// Questions for the user to answer
const questions = [
    {
        type: 'input',
        message: 'Enter three characters you would like to use for your logo.',
        name: 'text'
    },
    {
        type: 'list',
        message: 'Select a shape from the list below that you would like to use for your logo.',
        name: 'shapes',
        choices: [
            "Triangle",
            "Circle",
            "Square"
        ]
    },
    {
        type: 'input',
        message: 'Enter a color you would like your text to be.',
        name: 'textColor',
        
    }, 
    {
        type: 'input',
        message: 'Enter a color that you would like your shape to be.',
        name: 'shapeColor',
    } 
];

// Function that will generate the logo to the svg file
function writeToFile(fileName, data) {
    const logo = logoGenerator(data);
    fs.writeFile(fileName, logo, function (error) {
        if (error) {
            return console.error(err);
        } else {
            console.log(`Success, logo generated!`);
        }
    });
};

function init() {
    inquirer.prompt(questions)
    .then(function (data) {
        var fileName = 'logo.svg';
        writeToFile(fileName, data);
    })
};

init();