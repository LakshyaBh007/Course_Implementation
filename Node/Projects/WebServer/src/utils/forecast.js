const request = require('postman-request')

const forecast = (latitude,longitude, callback) => {
    const url = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=222ccd655a3444768ff2b39bb47b3f67`

    request({url, json: true},(error, {body})=> {
    if (error){
        callback('unable to connect to weather service!', undefined)
    } 
    else if (body.error){
        callback('unable to find location', undefined)
    }
    else {
       callback(undefined, body.data[0].weather.description + '. It is currently '+ body.data[0].app_temp + ' degrees out. There is a '+ body.data[0].precip + '% chance of rain' )
    }
  }) 
}

module.exports = forecast