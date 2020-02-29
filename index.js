const fs = require("fs");
const inquirer = require("inquirer");
inquirer
.prompt([{
    type: "input",
    message: "What is your project name?",
    name: "name"
},
    {
      type:"input",
      message:"What is your name?",
      name:"userName"
},
    {
      type:"input",
      message:"What is your email?",
      name:"email",
},
    {
    type:"input",
    message: "please write out a brief description of your project.",
    name: "description"
},
    {
    type:"input",
    message:"what NPMs were used?",
    name:"npmInstall"
},
    {
    type:"input",
    message: "what is the purpose of your program?",
    name: "usage"
},
    {
    type:"input",
    message:"What licensing is this project under?",
    name:"license"
},
    {
    type:"input",
    message:"what are the contribution guidelines?",
    name:"guidelines"
},
    {
    type:"input",
    message:"What are the requirements to test your program?",
    name: "test"
},
    {
      type:"input",
      message:"Please provide your GitHub Username.",
      name:"username"

}
])
.then (function({username}){
  const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`

})
.then (function(response) {
  const readMe =`[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

  [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
  
  # ${response.name}.
  #### ${response.userName}
  #### ${response.email}
  
  ## a little about the project
    ${response.description}
  
  ## Table Of Contents
      Grab a list of values here
  
  # Before you start, You'll need this!
    ${response.npmInstall}
  
  ## What was used to make this project
    ${response.usage}
  
  
  ## Licensing
   ${response.license}
  
  ## Contributing Guidelines
    ${response.guidelines}.
  
  # tests
    ${response.test}
  
  # questions
    ${response.questions}
    
  `
  fs.writeFile("READMEgen.md", readMe, function(err) {
  });
  
});