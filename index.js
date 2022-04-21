// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short project description.",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license does your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "repository",
    message: "Link to your repository.",
  },
  {
    type: "input",
    name: "example",
    message: "Do you have a relative path to a project example?",
  },
]

// TODO: Create a function to write README file
// function writeToFile(data) {
//   fs.writeFile("README.md", generateMarkdown(data))
// }

// TODO: Create a function to initialize app
const init = () => {
  inquirer.prompt(questions)
  .then((answers) => fs.writeFileSync("README.md", generateMarkdown(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));
}


// Function call to initialize app
init();
