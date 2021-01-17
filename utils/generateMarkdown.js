// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "BSD 3-Clause":
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case "Eclipse":
      return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    case "ISC":
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Open Database":
      return `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`;
    case "BSD 3-Clause":
      return `[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)`;
    case "Eclipse":
      return `[Eclipse Public License 1.0](https://opensource.org/licenses/EPL-1.0)`;
    case "ISC":
      return `[ISC License](https://opensource.org/licenses/ISC)`;
    case "MIT":
      return `[MIT License](https://opensource.org/licenses/MIT)`;
    case "Open Database":
      return `[Open Database License](https://opendatacommons.org/licenses/odbl/)`;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "Apache":
      return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "BSD 3-Clause":
      return `[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case "Eclipse":
      return `[Eclipse Public License 1.0](https://opensource.org/licenses/EPL-1.0)`;
      break;
    case "ISC":
      return `[ISC License](https://opensource.org/licenses/ISC)`;
      break;
    case "MIT":
      return `[MIT License](https://opensource.org/licenses/MIT)`;
      break;
    case "Open Database":
      return `[Open Database License](https://opendatacommons.org/licenses/odbl/)`;
      break;
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}  ${renderLicenseBadge(data.license)} 
  This readme has been procedurally generated 
  
  -----------------------
  ## Table of Contents
  1. [Description](#description)
  2. [Deployed link](#deployed-link)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [Licenses](#licenses)
  6. [Contributing](#contributing)
  7. [Tests](#tests)
  8. [Questions](#questions)

  -----------------------
  ## Description
  ${data.description}

  -----------------------
  ## Deployed link
  ${data.link}

  -----------------------
  ## Installation
  To install dependencies run the following command:
  \`\`\`
  ${data.dependencies}
  \`\`\`

  -----------------------
  ## Usage
  To use this repo you will need a working knowledge of ${data.repoInfo}. 

  To run this tool use the following command. This will generate a markdown file in the root folder with the name of 'READMETOO.md

  \`\`\`
  node index.js
  \`\`\`

  -----------------------
  ## Licenses
  This project uses a ${renderLicenseLink(data.license)}. 

  -----------------------
  ## Contributing
  If you would like to contribute, you will need to know ${data.repoContribute}.

  -----------------------
  ## Tests
  To run tests run the following command:
  \`\`\`
  ${data.tests}
  \`\`\`

  -----------------------
  ## Questions
  Created by ${data.name}
  If you have any questions you can reach me at the following email: ${data.email}

  Follow my other work at GitHub: https://github.com/${data.name}/
  `;
}

module.exports = {
  generateMarkdown
};
