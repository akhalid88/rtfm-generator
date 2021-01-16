// TODO: Include packages needed for this application


// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {

}

// Function call to initialize app
init();
