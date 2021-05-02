const request = require('request');

const forecast = (lattitude, longtitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=2d68424ef690e95b723aa2a8714b26b9&query=${lattitude},${longtitude}&units=f`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degress out."))
    }
  })
}

module.exports = forecast