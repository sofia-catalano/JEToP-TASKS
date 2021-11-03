'use strict';

const express = require('express');
const morgan = require('morgan');

// init express
const app = new express();
const port = 3001;

/* Set-up the middlewares */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static("./client/build"));



/***  APIs ***/

app.get('/api/weather', (req, res) => {
  let request = require('request');
  let apiKey = 'fe6ef69bfc614e02197f2a39a43067d8';
  let city = req.query.city;
  let date = req.query.date;
  let lang = "it"
  let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=${lang}&units=metric'`
  request(url, function (err, response, body) {
    if(err){
      res.status(400).end();
    } else {
      let resp = JSON.parse(body);
      let index = resp.list.findIndex((element) => element.dt_txt.includes(date));
      if(index!= -1){
        let result = resp.list[index];
        res.status(200).json(result);
      }else{
        res.status(400).end();
      }
     
    }
  });
});

/*** End APIs ***/

// activate the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

