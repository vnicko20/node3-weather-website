const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibmVleHYiLCJhIjoiY2tyMDVqcnR6MW9sMDJ2cGEyb3dneGJtNCJ9.svJT8PyW1Uj8zwHaIU64HQ&limit=1'
    request ({ url, json: true}, (error, {body}) => {
        
        if (error) {
            callback ('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const {features} = body
            callback(undefined, {
                longitude: features[0].center[0],
                latitude: features[0].center[1],
                location: features[0].place_name
            })
        }
    })

}

module.exports = geocode