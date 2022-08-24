const {Websocket} = require('../src/index')

const s = new WebSocket('any')

s.connectClient('bot-token')