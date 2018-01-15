const express = require ('express');
const hbs = require ('hbs');
const port = process.env.PORT || 3000;

var app = express();

app.set ('view_engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

app.get('/', (req, res) => {
   // res.send ('<H1>WOW IT WORKS!</H1>');

   res.render ('home.hbs', {
        PageTitle : 'Home Page',
        PageNote : 'Welcome to our Site!!'
    });
});

app.get('/about', (req, res)=> {
  //  res.send ('ABOUT PAGE !!!');
    res.render ('about.hbs', {
        PageTitle : 'About Page',
        PageNote : 'Tell you something!!'
    });
});

app.get('/project', (req, res) => {
    res.render ('project.hbs', {
         PageTitle : 'Project Page',
         PageNote : 'Our Project HERE!!'
    });
 });

app.get('/bad', (req, res) => {
    var eMsg = {
        ErrorMsg : "ERROR ! UNABLE TO CONTINUE"
    };
    res.send(eMsg);
});

app.listen(port, () => {
    console.log (`Server running on port ${port}`);
});