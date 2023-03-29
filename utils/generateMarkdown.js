// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'GPLv2') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  } else if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD 3-clause') {
    return '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  } else if (license === 'Other') {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `## License

This project is licensed under the ${license} license. Feel free to edit and distribute this template as you like.\n
See ${renderLicenseBadge(license)} for more information.`
}

function renderInstallationInstructions(instructions) {
  if (!instructions) {
    return '';
  }
  const instructionsArray = instructions.split(';');
  const instructionsList = instructionsArray.join('\n')
  return `${instructionsList}`
}

function renderUsageInstructions(usage) {
  if (!usage) {
    return '';
  }
  const usageArray = usage.split(';');
  const usageList = usageArray.join('\n')
  return `${usageList}`
}

function renderContributionsInstructions(contributions) {
  if (!contributions) {
    return '';
  }
  const contributionsArray = contributions.split(';');
  const contributionsList = contributionsArray.join('\n')
  return `${contributionsList}`
}

function renderTestsInstructions(tests) {
  if (!tests) {
    return '';
  }
  const testsArray = tests.split(';');
  const testsList = testsArray.join('\n')
  return `${testsList}`
}

function renderQuestionsSection(github, email) {
  if (!github && !email) {
    return '';
  }

  let githubLink = '';
  if (github) {
    githubLink = `[${github}](https://github.com/${github})`;
  }

  let emailLink = '';
  if (email) {
    emailLink = ` or email me at ${email}`;
  }

  return `## Questions

If you have any questions or issues, feel free to reach out to me via my GitHub profile: ${githubLink}${emailLink}.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
  
${data.desc}
  
  
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Tests](#tests)
- [Project Links](#project-links)
- [License](#license)
- [Questions](#questions)

## Technologies Used

${data.technologies.join(', ')}

## Installation

Please follow these steps to install and run the project on your local machine:
${renderInstallationInstructions(data.instructions)}
  
## Usage
  
To use this project, follow these steps:
${renderUsageInstructions(data.usage)}

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
${renderContributionsInstructions(data.contributions)}

Please ensure your pull request adheres to the project's code style and includes tests for any new features or changes. Thank you for your contributions!

## Tests

To run tests on this project, follow these steps:
${renderTestsInstructions(data.tests)}
  
## Project Links
  
Walkthrough Demo:\n
Github Repository:

${renderLicenseSection(data.license)}

${renderQuestionsSection(data.github, data.email)}
`;
}

module.exports = generateMarkdown;
