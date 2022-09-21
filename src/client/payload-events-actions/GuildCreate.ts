import { Payload } from '../../constants/Payloads';
import { BotCord } from '../BotCord';
import { Guild } from '../../events-posts';
import GuildObject from '../rest/interfaces/IGuildStructure';
import { Events } from '../../constants';
export class GuildCreatePayload {
  private bot_cord: BotCord;
  private payload: Payload;
  constructor(payload: Payload, bot_cord: BotCord) {
    this.bot_cord = bot_cord;
    this.payload = payload;
  }
  async _run() {
    const guild: GuildObject = this.payload.d;
    const guildClass = new Guild(this.bot_cord);
    const check = this.bot_cord.guilds.get(guild.id);
    guildClass._run(guild);
    if (!check) {
      this.bot_cord.guilds.set(guild.id, guildClass);
    }
    this.bot_cord.emit(Events.GUILD_CREATE, guildClass);
  }
}
