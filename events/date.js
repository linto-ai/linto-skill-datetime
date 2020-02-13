const debug = require('debug')('linto:skill:v2:linto-skill:datetime:events:date')

module.exports = function (msg) {
  let tts = this.skillConfig[this.skillConfig.language]
  return { say: `${tts.say.date} ${new Date().toISOString().split('T')[0]}` }
}