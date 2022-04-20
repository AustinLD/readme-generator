// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short project description.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license does your project have?',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: 'input',
      name: 'repository',
      message: 'Link to your repository.',
    },
    {
      type: 'input',
      name: 'example',
      message: 'Do you have a link to an example of the project?',
    },
  ])
  
}

// TODO: Create a function to write README file
const writeToFile = ({github, email, title, description, license, repository, example}) => {
`# Title

## About / Synopsis


## Table of contents

> * [Title](#title)
>   * [About / Synopsis](#about--synopsis)
>   * [Table of contents](#table-of-contents)
>   * [Installation](#installation)
>     * [Screenshots](#screenshots)
>   * [License](#license)

## Installation

### Screenshots

## License`
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
