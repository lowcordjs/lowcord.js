import { Payload, MessageObject, id } from '../../../constants';
import { BotCord } from '../../BotCord';
import { Message } from '../../../events-posts/';
export class MessageCache {
  constructor(private bot_cord: BotCord, private payload: Payload, private eventName: any) {
    this.bot_cord = bot_cord;
    this.payload = payload;
  }
  async _run(channelId: id) {
    if (this.eventName == 'GUILD_CREATE') {
      const messageClass = new Message(this.bot_cord);

      const messages: MessageObject[] = await this.bot_cord.rest.getChannelMessages(channelId);
      for (const message of messages) {
        const checkMessage = this.bot_cord.messages.get(message.id);
        if (!checkMessage) {
          messageClass._run(message);
          this.bot_cord.messages.set(message.id, messageClass);
        }
      }
    }
  }
}
