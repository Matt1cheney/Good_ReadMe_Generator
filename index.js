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
    message:"something about tests",
    name: "test"
},
    {
      type:"input",
      message:"questions go here",
      name:"questions"

}
])
.then (function(response) {
  const readMe =`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      />
      <title>generate your profile!</title>
    </head>
    <body>
      <div class="container-fluid">
        <header class="text-center jumbotron">
          <h1 class="name">${response.name}</h1>
        </header>
        <div class="row">
          <div class="mx-auto locationDiv">
            <h3 class="location">${response.location}</h3>
          </div>
  
          <div class="mx-auto bioDiv">
            <p class="bio">${response.about}</p>
          </div>
        </div>
        <div class="text-center mx-auto card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Below is a list of my URL's!</h5>
            <a href="${response.LinkedInURL}" class="card-link">My LinkedIn</a>
            <a href="${response.GitHubURL}" class="card-link">My GitHub Link</a>
          </div>
        </div>
          </ul>
        </div>
      </div>
    </body>
  </html>
  `
  fs.writeFile("README.md", readMe, function(err) {
  });
  
});