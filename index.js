
// let request =  require('request');
// const apiKey = '57fab7908d9f2206606d70b4bf797a9b'

// const argv = require('yargs').argv;
// let city = argv.c || 'london';

// app.post('/',function (req,res) {
//     let city = req.body.city
//     // let lat = '51.500149'
//     // let lon = '-0.126240'
//     let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}` }

//     request(url, function (err, response, body)) { 
//       if (err){
//         res.render('index', {weather: null, error: 'Error, please try again'})
//     } else {
//         let weather = JSON.parse(body)
//         if(weather.main == undefined) {
//         res.render('index',{weather: null, error: 'Error, please try again'})
//       } else {
//         let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
//         res.render('index', {weather: weatherText, error: null});
//       }
