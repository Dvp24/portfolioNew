// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/about", function(req, res){
    // console.log('/about get')
    res.sendFile(path.join(__dirname, "../public/about.html"))
  })
  app.get("/portfolio", function(req, res){
    // console.log('/portfolio get')
    res.sendFile(path.join(__dirname, "../public/portfolio.html"))
  })
  // default route takes you to the login page
  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};
