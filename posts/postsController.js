// Import http
let http = require("http")
// Import axios
const axios = require("axios").default;

// Import the Product Hunt token
const TOKEN = process.env.TOKEN;

// Get a collection of product from a specific day
exports.getPostsByDay = (req,res) => {
    let options = {
        url:'http://api.producthunt.com/v1/posts?day='+req.params.date,
        method: 'get',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ TOKEN,
        }
    }
    axios(options).then((response)=>{
        res.json(response.data)
    }).catch((error)=>{
        console.log(error)
    })
}