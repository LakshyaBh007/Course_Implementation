const https = require('https')
const url = 'https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=222ccd655a3444768ff2b39bb47b3f67'

const request = https.request(url,(response)=>{
    let data = ''

    response.on('data', (chunk)=>{
        data = data + chunk.toString()
    })

    response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error',(error)=>{
    console.log('ah error', error)
})

request.end()