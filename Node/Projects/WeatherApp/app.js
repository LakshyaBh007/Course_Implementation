const request = require('postman-request')

const url = 'https://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=42.3605,-71.0596'

request({url: url, json: true},(error, response)=> {
    if (error){
        console.log('unable to connect to weather service!')
    } 
    else if (response.body.error){
        console.log('unable to find location')
    }
    else {
        console.log(response.body.current.weather_descriptions[0] + '. it is currently '+ response.body.current.temperature + ' degrees out. There is a '+ response.body.current.feelslike + '% chance of rain' )
    }
  }) 

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

request({url: geocodeURL, json: true}, (error, response)=>{
    if (error) {
    console.log('unable to connect to location services')
    } 
    else if (response.body.features.length === 0) {
    console.log('unable to find location, try another search')
    }
    else {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude,longitude)
    }    
})

const geocode = (address,callback)=>{
   const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + 
}

geocode('Philadelphia', (error, data)=>{

})