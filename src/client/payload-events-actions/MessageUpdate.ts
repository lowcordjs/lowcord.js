import { Payload } from '../../constants/Payloads';
import { BotCord } from '../BotCord';
import { Message } from '../../events-posts';
import { Events } from '../../constants/Events';
import { MessageSetup } from '../../setups'

export class MessageUpdatePayload {
  private bot_cord: BotCord;
  private payload: Payload;
  constructor(payload: Payload, bot_cord: BotCord) {
    this.bot_cord = bot_cord;
    this.payload = payload;
  }
  async _run() {
    const msgR = await new MessageSetup(this.bot_cord, this.payload.d)
    msgR._run()
    const newMessage = new Message(this.bot_cord)
    newMessage._run(msgR.message)
      const oldMessage = this.bot_cord.messages.get(newMessage.id);
      if(!newMessage.collection.get(newMessage.id)){
        newMessage.collection.set(newMessage?.id, newMessage)
      }
      this.bot_cord.emit(Events.MESSAGE_UPDATE, oldMessage as Message, newMessage);
  }
}
