import EventEmitter from 'events';
import WebSocket from 'ws';
import { Heartbeat, Identify, Payload, GATEWAY } from '../../constants/Payloads';

export class WebSocketManager extends EventEmitter {
  private socket = new WebSocket(GATEWAY);
  private ackRecieved: boolean = false;
  private interval: number = 0;

  constructor(private client: any) {
    super();
    this.client = client;
  }
  async connectClient(token: string) {
    try {
      this.socket.on('message', async data => {
        const payload: Payload = JSON.parse(data.toString());

        if (payload.op === 10) {
          this.interval = (await this.heartbeat(payload.d.heartbeat_interval)) as any;

          await this.identify(token);
        } else if (payload.op == 11) {
          this.ackRecieved = true;
        } else if (payload.op == 9) {
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
      this.socket.send(
        JSON.stringify(Heartbeat),
      );
    }, ms);
  }
  identify(token: string) {
    Identify.d.token = token;
    this.socket.send(JSON.stringify(Identify));
  }
}

export default WebSocketManager;
