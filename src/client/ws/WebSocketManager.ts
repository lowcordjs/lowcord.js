import * as WebSocket from 'ws';
import { Heartbeat, Identify, Payload, GATEWAY } from '../../constants/Payloads';
import { OPCODE } from '../../constants/Constants';
import { calcIntnet } from '../../helpers/Calculate_intents';
import { BotCord } from '../BotCord';
export class WebSocketManager {
  private socket = new WebSocket(GATEWAY);
  private ackRecieved = false;
  private interval = 0;
  private socketData!: any
  constructor(private client: BotCord) {
    this.client = client;
  }
  async connectClient(token: string, intents: number[]) {
    try {
      this.socket.on('message', async data => {
        if (intents.length == 0) throw Error(`no intents detected!`);
        const payload: Payload = JSON.parse(data.toString());
        const op_code = payload.op;
        if (op_code === OPCODE.TEN) {
          this.interval = (await this.heartbeat(payload.d.heartbeat_interval)) as any;

          this.identify(token, intents);
        } else if (op_code == OPCODE.ELEVEN) {
          this.ackRecieved = true;
        } else if (op_code == OPCODE.NINE) {
          throw Error('Invalid gateway session');
        }
        if (payload.t) {
          
          const {default: module } = await import(`./payload-events/${payload.t}.${"js" || "ts"}`)
          module(this.client, payload)
          this.sendSocket(this.socketData)
        }
      });
      this.socket.on('error', (err) => {
        throw Error(err as any)
      })

    } catch (err) {
      throw Error(err as any);
    }
  }
  async heartbeat(ms: number) {
    return setInterval(() => {
      this.socket.send(JSON.stringify(Heartbeat));
    }, ms);
  }
  identify(token: string, intents: number[]) {
    Identify.d.token = token;
    if (intents.length == 0) throw Error(`no intents detected!`);
    Identify.d.intents = calcIntnet(intents);
    this.socket.send(JSON.stringify(Identify));
  }
  sendSocket(data: any) {
    this.socketData = data
    this.socket.send(this.socketData)
  }
}
