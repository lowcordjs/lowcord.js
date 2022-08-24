const EventEmitter = require('events');
const WebSocket = require('ws');
const GATEWAY = 'wss://gateway.discord.gg/?v=10&encoding=json';

class WebSocketManager extends EventEmitter{
  #socket = new WebSocket(GATEWAY);
  #ackRecieved = false;
  #interval = 0;
  #client;
  
  constructor(client) {
    super()
    this.#client = client;
  }
  async connectClient(token) {
    try {
      this.#socket.on('message', async data => {
        const payload = JSON.parse(data.toString());

        if (payload.op === 10) {
          this.#interval = await this.#heartbeat(payload.d.heartbeat_interval);

          await this.#identify(token);
        } else if (payload.op == 11) {
          this.#ackRecieved = true;
        } else if (payload.op == 9) {
          throw Error('Invalid gateway session');
        }
        if (payload.t) {
          // will continue for client constructor later...
        }
        
      });
    } catch (err) {
      throw Error(err);
    }
  }
  async #heartbeat(ms) {
    return setInterval(() => {
      this.#socket.send(
        JSON.stringify({
          op: 1,
          d: null,
        }),
      );
    }, ms);
  }
  #identify(token) {
    this.#socket.send(
      JSON.stringify({
        op: 2,
        d: {
          token: token,
          intents: 513,
          properties: {
            os: 'linux',
            browser: 'lowcord.js',
            device: 'lowcord.js',
          },
        },
      }),
    );
  }
}

module.exports = WebSocketManager