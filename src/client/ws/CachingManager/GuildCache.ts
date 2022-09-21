import { Payload } from '../../../constants';
import { BotCord } from '../../BotCord';
import { Guild } from '../../../events-posts/';
import GuildObject from '../../rest/interfaces/IGuildStructure';
export class GuildCache {
  constructor(private bot_cord: BotCord, private payload: Payload, private eventName: any) {
    this.bot_cord = bot_cord;
    this.payload = payload;
  }
  async _run() {
    if (this.eventName == 'GUILD_CREATE') {
      const guild: GuildObject = this.payload.d;
      const guildClass = new Guild(this.bot_cord);
      const check = this.bot_cord.guilds.get(guild.id);
      if (!check) {
        guildClass._run(guild);
        this.bot_cord.guilds.set(guild.id, guildClass);
      }
    }
  }
}
