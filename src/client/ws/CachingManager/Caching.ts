import { Payload } from '../../../constants';
import { BotCord } from '../../BotCord';
import { ChannelCache, GuildCache } from './';
export class Caching {
  constructor(private bot_cord: BotCord, private payload: Payload, private eventName: any) {
    this.bot_cord = bot_cord;
    this.payload = payload;
  }
  async _run() {
    if (this.eventName == 'GUILD_CREATE') {
      // const emojis = this.payload.d.emojis
      // const roles = this.payload.d.roles
      // const stickers = this.payload.d.stickers
      // const features = this.payload.d.features
      // const presences = this.payload.d.presences
      // const stage_instances = this.payload.d.stage_instances
      // const guild_scheduled_events = this.payload.d.guild_scheduled_events
      // const voice_states = this.payload.d.voice_states
      // const members = this.payload.d.members
      // const threads = this.payload.d.threads

      await new ChannelCache(this.bot_cord, this.payload, this.eventName)._run();
      await new GuildCache(this.bot_cord, this.payload, this.eventName)._run();
    }
  }
}
