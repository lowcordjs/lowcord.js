import { Payload, ChannelObject } from '../../../constants';
import { BotCord } from '../../BotCord';
import { GuildTextChannel } from '../../../events-posts/';
import { MessageCache } from './MessageCache';
export class ChannelCache {
  constructor(private bot_cord: BotCord, private payload: Payload, private eventName: any) {
    this.bot_cord = bot_cord;
    this.payload = payload;
  }
  async _run() {
    if (this.eventName == 'GUILD_CREATE') {
      const channels: ChannelObject[] = this.payload.d.channels;
      const channelClass = new GuildTextChannel(this.bot_cord);
      for (const channel of channels) {
        const checkChannel = this.bot_cord.channels.get(channel.id);
        if (!checkChannel) {
          channelClass._run(channel);
          this.bot_cord.channels.set(channel.id, channelClass);
        }
        await new MessageCache(this.bot_cord, this.payload, this.eventName)._run(channel.id);
      }
    }
  }
}
