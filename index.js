// Import express
let express = require('express')
// Initialize the backend
let app = express()

let cors = require('cors');

app.use(cors())
// Set the environement
var env = process.env.NODE_ENV || 'development'

if(env == 'development'){
    let dotenv = require("dotenv")
    dotenv.config();
}

// Set the server port
const port = process.env.PORT || 8080;

// Imporrt Api routes
let apiRoutes = require("./api-routes")

// Use Api routes for the backend 
app.use("/api", apiRoutes)

// Launch the backend 
app.listen(port, ()=>{
    console.log("Running backend on port : " + port)
})