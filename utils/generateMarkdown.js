// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return "QWERTYUIOPOASDFGHJKLZXCVBNM";
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project} 
  This readme has been procedurally generated 
  ${renderLicenseSection()}
  -----------------------
  ## Table of Contents
  1. [Description](#description)
  2. [Deployed link](#deployed-link)
  3. [Commands](#commands)
  4. [Use and Contribution](#use-and-contribution)
  5. [Licenses](#licenses)
  6. [Author](#author)

  -----------------------
  ## Description
  ${data.description}

  -----------------------
  ## Deployed link
  ${data.link}

  -----------------------
  ## Commands
  To install dependencies run the following command:
  \`\`\`
  ${data.dependencies}
  \`\`\`

  To run tests run the following command:
  \`\`\`
  ${data.tests}
  \`\`\`

  -----------------------
  ## Use and Contribution
  To use this repo you will need a working knowledge of ${data.repoInfo}. 

  To run this tool use the following command. This will generate a markdown file in the root folder with the name of 'READMETOO.md

  \`\`\`
  node index.js
  \`\`\`



  If you would like to contribute, you will need to know ${data.repoContribute}.

  -----------------------
  ## Licenses
  This project uses a ${data.license} license.

  -----------------------
  ## Author
  Created by ${data.name}
  Email: ${data.email}
  GitHub: https://github.com/${data.name}/
  `;
}

module.exports = {
  generateMarkdown
};
