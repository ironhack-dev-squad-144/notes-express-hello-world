// To eecute the file: $nodemon

// Save in the variable `express` the content of the package "express"
const express = require("express");

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
// Example: http://localhost:3000/chartreuse.gif (without "/public")
// Example: http://localhost:3000/css/style.css
app.use(express.static("public"));

// The route "/" (http://localhost:3000)
app.get("/", (request, response, next) => {
  console.log("DEBUG request.url", request.url);
  response.send(`
    <html>
      <head>
        <link rel="stylesheet" href="/css/style.css">
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
        <h1>Hello world</h1>
        <p>My random number is ${Math.floor(Math.random() * 10)}</p>
        <p>Today is: ${new Date().toLocaleDateString()}</p>
        <img src="chartreuse.gif">
      </body>
    </html>
    `);
});

// The route "/about" (http://localhost:3000/about)
app.get("/about", (request, response, next) => {
  response.send(`
    <html>
    <head>
      <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
      <h1>About</h1><p>This website was made by Maxence</p>
    </body>
  </html>
  `);
});

app.get("/chartreuse/for/ever", (request, response, next) => {
  console.log("DEBUG request.url", request.url);
  response.send(`
    <h1>Chartreuse for ever 💚</h1>
    <img src="/chartreuse.gif">
  `);
});

// Start the server
app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
