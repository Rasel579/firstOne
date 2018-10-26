const express = require('express');
require('./services/passport');


const app = express();
//https://console.developers.google.com/

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log('Server is running on the port ' + PORT);
});