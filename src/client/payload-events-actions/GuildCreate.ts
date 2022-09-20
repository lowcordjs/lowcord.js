import { Payload } from '../../constants/Payloads';
import { ChannelObject, channelTypes, MessageObject } from '../../constants';
import { BotCord } from '../BotCord';
import { GuildTextChannel, Message, Guild } from '../../events-posts';
import { Events } from '../../constants/Events';

export class MessageCreatePayload {
  private bot_cord: BotCord;
  private payload: Payload;
  constructor(payload: Payload, bot_cord: BotCord) {
    this.bot_cord = bot_cord;
    this.payload = payload;
  }
  async _run() {
    const roles = this.payload.d.roles;
    const emojis = this.payload.d.emojis;
    const users = this.payload.d.members;
    const channels: ChannelObject[] = this.payload.d.channels;
    const stickers = this.payload.d.stickers;

    const guildClass = new Guild(this.bot_cord);
    guildClass.define(this.payload.d);
    const classChannel = new GuildTextChannel(this.bot_cord);
    for (const channel of channels) {
      classChannel.run(channel);
      classChannel.collection.set(channel.id, classChannel);
      
    }

    this.bot_cord.emit('guildCreate', guildClass);
  }
}
