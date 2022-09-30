import { Payload } from '../../../constants';
import { BotCord } from '../../BotCord';
import { ChannelCache, GuildCache, EmojiCache, RoleCache } from './';
export class Caching {
  constructor(private bot_cord: BotCord, private payload: Payload, private eventName: any) {
    this.bot_cord = bot_cord;
    this.payload = payload;
  }
  async _run() {
    if (this.eventName == 'GUILD_CREATE') {
      // const stickers = this.payload.d.stickers
      // const features = this.payload.d.features
      // const presences = this.payload.d.presences
      // const stage_instances = this.payload.d.stage_instances
      // const guild_scheduled_events = this.payload.d.guild_scheduled_events
      // const voice_states = this.payload.d.voice_states
      // const members = this.payload.d.members
      // const threads = this.payload.d.threads

      await new RoleCache(this.bot_cord, this.payload, this.eventName)._run();
      await new EmojiCache(this.bot_cord, this.payload, this.eventName)._run();
      await new ChannelCache(this.bot_cord, this.payload, this.eventName)._run();
      await new GuildCache(this.bot_cord, this.payload, this.eventName)._run();
    }
  }
}
