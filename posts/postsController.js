// Import http
let http = require("http")
// Import axios
const axios = require("axios").default;

// Import the Product Hunt token
const TOKEN = process.env.TOKEN;

// Get a collection of product from a specific day
exports.getPostsByDay = (req,res) => {
    let date = req.params.date
    let check = checkDate(date)
    res.setHeader('Content-Type', 'application/json');
    if(check.isValid){
        let options = {
            url:'http://api.producthunt.com/v1/posts?day='+date,
            method: 'get',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ TOKEN,
            }
        }
        axios(options).then((response)=>{
            res.json({
                "status" : 200,
                "response" : {
                    "date" : checkDate(date).date,
                    "results" : response.data.posts.map(mapPost)
                }
            })
        }).catch((error)=>{
            res.json({
                "status" : 500,
                "response" : {
                    "date" : checkDate(date).date,
                    "results" : [],
                    "message" : "Internal API request error"
                }
            })
        })
    }else{
        res.json({
            "status" : 400,
            "response" : {
                "date" : check.date,
                "results" : [],
                "message" : check.message
            }
        })
    }
    
}

/**
 * Callback for Array.map funnction to format the array of posts
 * 
 * @param {Object} post 
 * @returns Return the formated Post
 */
let mapPost = (post) =>{
    let rPost = {}
    rPost["name"] = post.name
    rPost["tagline"] = post.tagline
    rPost["topics"] = post.topics.map((topic)=>{
        return {"name": topic.name}
    })
    rPost["redirect_link"] = post.redirect_link
    rPost["thumbnail"] = post.thumbnail.image_url
    rPost["day"] = post.day
    return rPost
}

/**
 * Validation of the date before the query.
 * 
 * @param {String} date 
 * @returns {Object} Return an object which describ the validation of the date
 */
let checkDate = (date) => {
    // Object containing the validation of the date, the message, and the date
    var returnObj = {
        "isValid" : false
    }
    // Initialize the date
    var d = new Date(date)
    // Split the date into array to each params (year,month,date)
    var dateSplited = date.split("-")
    // Check if the date has the correct format and if the user gave year, month and date
    if(!isNaN(d.getTime()) && dateSplited.length == 3){
        // Case where the date is correct
        if(d < new Date()){
            returnObj.isValid = true
            returnObj.date = d.getFullYear().toString()+ "-" + (d.getMonth()+1)+ "-" + d.getDate()
            return returnObj
        }
        // Case where date after today 
        else{
            returnObj.date = d.getFullYear().toString()+ "-" + (d.getMonth()+1)+ "-" + d.getDate()
            returnObj.message = "This date has no product bacause this day is day after today"
            return returnObj
        }   
    }
    // Case where the format is unvalid or the user didn't give enough information
    else{
        returnObj.date = "NaN"
        returnObj.message = "Invalid date"
        return returnObj
    }
}