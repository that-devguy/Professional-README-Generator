// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.desc}
  
  ## Technologies Used

  ${data.technologies}
  
  ## ${data.title} Demo
  
  The following images show the web application's appearance and functionality:
  
  ## Links
  
  Deployed Application: ${data.appURL}
  Github Repository: ${data.repoURL}
`;
}

module.exports = generateMarkdown;
