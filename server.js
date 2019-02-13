var express = require("express")
const app = express();
const PORT = process.env.PORT || 3004;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
app.use(express.static("public"));

require("./routes/htmlRoutes.js")(app)
// Add routes, both API and view


// Start the API server
app.listen(PORT, () => console.log(`🗺️ ==> Server now on ${PORT}`))