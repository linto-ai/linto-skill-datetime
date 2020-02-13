const debug = require('debug')('linto:skill:v2:linto-skill:datetime:events:time')

module.exports = function (msg) {
  let tts = this.skillConfig[this.skillConfig.language]

  let now = new Date()
  let hours = now.getHours()
  let min = now.getMinutes()
  return { say: `${tts.say.time}${hours}${tts.say.unit}${min}` }
}