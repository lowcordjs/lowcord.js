import { Payload, RoleObject } from '../../../constants';
import { BotCord } from '../../BotCord';
import { GuildRole } from '../../../events-posts/';
export class RoleCache {
  constructor(private bot_cord: BotCord, private payload: Payload, private eventName: any) {
    this.bot_cord = bot_cord;
    this.payload = payload;
  }
  async _run() {
    if (this.eventName == 'GUILD_CREATE') {
      const roles: RoleObject[] = this.payload.d.roles;
      for (const role of roles) {
        const checkE = this.bot_cord.roles.get(role.id);
        if (!checkE) {
          const roleClass = new GuildRole(this.bot_cord);
          await roleClass._run(role);
          this.bot_cord.roles.set(roleClass.id, roleClass);
        }
      }
    }
  }
}
