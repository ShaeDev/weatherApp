
const express = require('express')
const bodyParser = require('body-parser')
const request= require('request')
const path = require('path')

const app = express()

const apiKey = '57fab7908d9f2206606d70b4bf797a9b'

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')


app.get('/', function (req, res) {
    res.render('index', {weather: null, error: null});
})

app.post('/', function (req,res) {
    let city = req.body.city
    console.log(city)
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    request(url, function(err,response,body){
        if (err){
            res.render('index', {weather:null, error: 'Error, please try again'})
        } else {
            let jsonBody = JSON.parse(body)
            console.log(jsonBody,'jsonBody')
            const weather = jsonBody.weather[0]
            console.log(weather,'weather')
            const description = weather.description
            console.log(description, 'description')
            if (jsonBody.main == undefined){
                res.render('index', {jsonBody: null, error: 'Error, please try again'})
            } else {
                let weatherText= `${description} and the temperature is ${jsonBody.main.temp} degrees in ${jsonBody.name}! `;
                res.render('index', {weather: weatherText, error:null})
            }
        }
    })
})


app.listen(3000, function (){
    console.log('WTWeather app listening on port 3000!')
})



