import {
    id,
    UserObject
  } from '../constants/';
  import MemberPartial from '../client/rest/interfaces/IGuildMember';
  import { BotCord } from '../client/BotCord';
  import { Collection } from '@lowcordjs/collection/dist';

  export class GuildMember {
    private bot_cord: BotCord;
    // GuildMember data

    constructor(bot_cord: BotCord) {
      this.bot_cord = bot_cord;
    }
    async _run(body: MemberPartial) {

    }
  
  }
  