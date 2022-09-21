import { Payload } from '../../constants/Payloads';
import { ChannelObject, channelTypes, MessageObject } from '../../constants';
import { BotCord } from '../BotCord';
import { GuildTextChannel } from '../../events-posts';
import { Events } from '../../constants/Events';

export class MessageDeletePayload {
  private bot_cord: BotCord;
  private payload: Payload;
  constructor(payload: Payload, bot_cord: BotCord) {
    this.bot_cord = bot_cord;
    this.payload = payload;
  }
  async _run() {
    const channelData: ChannelObject = await this.bot_cord.rest.getChannel(this.payload.d.channel_id);
    const channel = new GuildTextChannel(this.bot_cord);
    channel._run(channelData);
    if (channel) {
      if (channel.type !== channelTypes.GUILD_TEXT) return;
      const message: MessageObject = this.payload.d;
      const messageData = await this.bot_cord.messages.get(message.id);
      this.bot_cord.emit(Events.MESSAGE_DELETE, messageData as any);
    }
  }
}
