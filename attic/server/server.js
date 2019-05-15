const express = require("express"); 
const bodyParser = require("body-parser"); 
const jwt = require("jsonwebtoken"); 

const app = express(); 
const PORT = process.env.PORT || 9001; 
const JWT_KEY = process.env.JWT_KEY || "fkjlashfjkshajkfashf"; 

app.use(bodyParser.json()); 
app.use(require("cors")()); 

//For testing and programming purpose only//
//post sends back a jwt with some Information in it//
app.post("/login", (req, res) => { 
    const { username, password } = req.body; 
    console.log("Username: "+ username );
    console.log("Password: " + password);
    if(username!="Max"){
        res.json({
           "status":"403"
        });
    }
    else{
        res.json({ 
            status: 200,
            token: jwt.sign( 
                       { 
                account: username.toLowerCase(), 
                name: "Max Mustermann", 
                persnr: "123456", 
                role: "BigBoss", 
                       }, 
    JWT_KEY 
    ) 
        }); 
    } 
});
app.listen(PORT, () => console.log('App listening on port ' + PORT));
