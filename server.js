const express = require ('express');
const hbs = require ('hbs');

var app = express();

app.set ('view_engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.render('maintenance.hbs');
});

app.get('/', (req, res) => {
   // res.send ('<H1>WOW IT WORKS!</H1>');

   res.render ('home.hbs', {
        PageTitle : 'Home Page',
        PageNote : 'Welcome to our Site!!',
        CurrentYear : new Date().getFullYear()
    });
});

app.get('/about', (req, res)=> {
  //  res.send ('ABOUT PAGE !!!');
    res.render ('about.hbs', {
        PageTitle : 'About Page',
        PageNote : 'Tell you something!!',
        CurrentYear : new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    var eMsg = {
        ErrorMsg : "ERROR ! UNABLE TO CONTINUE"
    };
    res.send(eMsg);
});
app.listen(3000);