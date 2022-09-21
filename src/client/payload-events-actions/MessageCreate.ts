import { Payload } from '../../constants/Payloads';
import { BotCord } from '../BotCord';
import { Events } from '../../constants/Events';
import { MessageSetup } from '../../setups'
import { Message } from '../../events-posts';
export class MessageCreatePayload {
  private bot_cord: BotCord;
  private payload: Payload;
  constructor(payload: Payload, bot_cord: BotCord) {
    this.bot_cord = bot_cord;
    this.payload = payload;
  }
  async _run() {
    const messageResult = new MessageSetup(this.bot_cord, this.payload.d)
    await messageResult._run()
    
    const msg = new Message(this.bot_cord)
    msg._run(messageResult.message)
      const checkCollection = this.bot_cord.messages.get(msg.id);
      if (!checkCollection) {
        this.bot_cord.messages.set(msg.id, msg);
      }
      this.bot_cord.emit(Events.MESSAGE_CREATE, msg);
  }
}
