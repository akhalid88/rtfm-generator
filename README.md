# RTFM Generator  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
This readme has been procedurally generated

-----------------------
## Table of Contents
1. [Description](#description)
2. [Deployed link](#deployed-link)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Code snippets](#code-snippets)
6. [Licenses](#licenses)
7. [Contributing](#contributing)
8. [Tests](#tests)
9. [Questions](#questions)

-----------------------
## Description
Having trouble writing your readme file? No worries, I've got you covered. Just use the super handy-dandy RTFM Generator. You will be prompted with a series of questions about your fantastic project and the application will handle the rest. Don't ask questions about how. It's magic!
![Readme](readme/readme.gif)

-----------------------
## Deployed link
https://github.com/akhalid88/rtfm-generator

-----------------------
## Installation
To install dependencies run the following command:
```
npm install
```

-----------------------
## Usage
To use this repo you will need a working knowledge of Javascript and Node.js. 

![Gif](readme/usage.gif)

To run this tool use the following command. This will generate a markdown file in the root folder with the name of 'READMETOO.md

```
node index.js
```

-----------------------
## Code snippets
Main function init()
```
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
```
A breakdown of the init function. We start with a try statement to handle the majority of the code. If there is any error it will catch and log the error in the catch portion of the statement. 

Then we pass the responses from the series of questions the user provides through 'promptUser(questions)' and store them in 'answers'. We then provide the answers to the markdown generator and store the response in 'readme'.

Finally we pass a file name and the generated 'readme' through the writeToFile function which is a promisified version of fs.writeFile thanks to tutil.promisify. This part of the ccode actually write the dat to the file. 

-----------------------
## Licenses
This project uses a [MIT License](https://opensource.org/licenses/MIT). 

-----------------------
## Contributing
If you would like to contribute, you will need to know Javascript and Node.js.

-----------------------
## Tests
To run tests run the following command:
```
N/A
```

-----------------------
## Questions
Created by akhalid88
If you have any questions you can reach me at the following email: [akhalid.code@gmail.com](mailto:akhalid.code@gmail.com)

Follow my other work at GitHub: https://github.com/akhalid88/
