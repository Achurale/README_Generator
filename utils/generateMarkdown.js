// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `Click [here](https://opensource.org/license/${license}/) for the license info.`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    if (license) {
      return `## License
      
      ${renderLicenseBadge(license)} ${renderLicenseLink(license)}`
    } else {
      return ""
    }
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credit)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#question)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credit}

  ## License
  ${data.license}

  ## Tests
  ${data.test}

  ## Questions
  For any further questions, my GitHub is github.com/${data.github}.
  To reach me by email, please use ${data.email}.

`;
}

module.exports = generateMarkdown;