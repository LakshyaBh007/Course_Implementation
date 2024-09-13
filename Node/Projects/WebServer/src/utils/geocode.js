const request = require('postman-request')

const geocode = (address,callback)=>{
    const url = `https://api.weatherbit.io/v2.0/current?&city=${address}&key=222ccd655a3444768ff2b39bb47b3f67`
 
 
    request({url: url, json: true}, (error, {body})=>{
     if (error) {
     callback('unable to connect to location services!', undefined)
     } 
     else if (body.error) {
     callback('unable to find location, try another search', undefined)
     }
     else {
         callback(undefined, {
             latitude: body.data[0].lat,
             longitude: body.data[0].lon,
             location: body.data[0].city_name
         })
     }    
 })
 }

 module.exports = geocode