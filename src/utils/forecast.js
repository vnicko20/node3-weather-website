const request = require('postman-request')

const forecast = (lon, lat, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d6414e9483f602ee0d5430e83cfd12cd&query=' + lat + ',' + lon
    request ({ url, json: true}, (error, {body}) => {
        
        if(error) {
            callback ('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location.')
        } else {
            // const data = response.body.current
            const {current} = body
            const {weather_descriptions, temperature, feelslike, humidity} = current
            callback(undefined, weather_descriptions[0] + ". It is currently " + temperature + " degrees out. It feels like " + feelslike + " degrees out. The humidity is " + humidity + "%.")
        }
    })
}

module.exports = forecast