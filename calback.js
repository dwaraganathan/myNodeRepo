var weather = require('./weatherApp.js');
var location = require('./location.js')
weather(function (currentWeather)
{
    console.log(currentWeather);
});
location(function (currentlocation)
{
    console.log(currentlocation);
});
