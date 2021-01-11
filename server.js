const express = require('express');
const cookieParser = require('cookie-parser');
const port = 8000;
const db = require('./config/mongoose.js');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(express.static('./assets'));
app.use('/', require('./routes/index.js'))
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(port, function (err){
    if(err){
        console.log('Error: ',err);
        return;
    }
    return console.log('Server running on port: ', port);
})