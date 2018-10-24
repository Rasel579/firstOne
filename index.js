const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
//https://console.developers.google.com/
//clientID 385352893850-okvdt66ob3ffv88c3seq7f0kuqnqhtq7.apps.googleusercontent.com
//client secret ktOjaTxfKG2jVwzZStzsarSI
passport.use(new GoogleStrategy());



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log('Server is running on the port ' + PORT);
});