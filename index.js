const express = require('express');
const app = express();
const routes = require('./routes.js');
const port = process.env.PORT || 8080;

app.use('/',routes);

app.listen(port ,()=>{
    console.log(`We live.   On port ${port}`);
});

