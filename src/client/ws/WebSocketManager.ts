import EventEmitter from 'events';
import WebSocket from 'ws';
import { Heartbeat, Identify, Payload, GATEWAY } from '../../constants/Payloads';
import { OPCODE } from '../../constants/Constants';
import { calcIntnet } from '../../helpers/Calculate_intents';
export class WebSocketManager extends EventEmitter {
  private socket = new WebSocket(GATEWAY);
  private ackRecieved = false;
  private interval = 0;
  constructor(private client: any) {
    super();
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
          // will continue for client constructor later...
        }
      });
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
}
