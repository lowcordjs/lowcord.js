import EventEmitter from 'events';
import { WebSocketManager } from './ws/WebSocketManager';
import { BotCordOptions } from '../constants/Constants';
export class BotCord extends EventEmitter {
  private socket = new WebSocketManager(this);
  constructor(private options: BotCordOptions) {
    super();
    this.options = options;
  }
  async joinWorld(token: string) {
    this.socket.connectClient(token, this.options.intents);
  }
}
