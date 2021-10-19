const express   = require("express");
const https     = require("https");
 

const app = express();


app.get("/", function(req, res){

    https.get("https://api.openweathermap.org/data/2.5/weather?q=new york&appid=72ca8b0fe5b422e66acc12c755128fc6&units=imperial", function(res){
       
        res.on("data", function(data){
            const weatherData  = JSON.parse(data)
            const temp          = weatherData.main.temp
            const desc          = weatherData.weather[0].description
             console.log(desc + temp)
        })
    })

    res.sendFile(__dirname + "/index.html");
})



app.listen(3000, function(){
    console.log("go");
});