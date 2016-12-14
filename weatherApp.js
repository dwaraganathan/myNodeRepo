var request = require('request');

var url = 'http://api.openweathermap.org/data/2.5/weather?q=Bangalore,India&appid=3ef40d6b38bf8385aeed39b105334a3e';
module.exports = function(callback){
request({

    url: url,
    json: true
}, function (error, response, body){
    if(error){
        console.log('unable to fetch weather');
    }else {
        console.log('its'+body.main.temp + 'in'+ body.name);
    }
});

}
