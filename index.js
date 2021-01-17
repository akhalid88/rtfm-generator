// Packages and JS files required for functionality
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generator = require('./utils/generateMarkdown.js');

const writeToFile = util.promisify(fs.writeFile);

// Array of questions to ask user
const questions = [
	{
		type: 'input',
		name: 'name',
		message: 'What is your GitHub username?'
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email address?'
	},
	{
		type: 'input',
		name: 'project',
		message: "What is your project's name?"
	},
	{
		type: 'input',
		name: 'link',
		message: "Where is your project deployed?"
	},
	{
		type: 'input',
		name: 'description',
		message: 'Please write a short description of your project.'
	},
	{
		type: 'list',
		name: 'license',
		message: 'What kind of license should your project have?',
		choices: ['Apache', 'BSD 3-Clause', 'Eclipse', 'ISC', 'MIT', 'Open Database']
	},
	{
		type: 'input',
		name: 'dependencies',
		message: 'What command should be run to install dependencies?'
	},
	{
		type: 'input',
		name: 'tests',
		message: 'What command should be run to run tests?'
	},
	{
		type: 'input',
		name: 'repoInfo',
		message: 'What does the user need to know about using the repo?'
	},
	{
		type: 'input',
		name: 'repoContribute',
		message: 'What does the user need to know about contributing to the repo?'
	}
];

// Prompt user
const promptUser = function (array) {
	return inquirer.prompt(array);
}

// TODO: Create a function to write README file
// function writeToFile(data) {
	// fs.writeFile('READMETOO.md', JSON.stringify(data, null, ' '), (err) =>
	// 	err ? console.log(err) : console.log("Huzzah!")
	// );
// }

// Initialize app
async function init() {
	try {
		const answers = await promptUser(questions);

		const readme = generator.generateMarkdown(answers);

		writeToFile("READMETOO.md", readme);

		console.log("Huzzah! You wrote a file");

	} catch (err) {
		console.log(err);
	}
}

// Function call to initialize app
init();
