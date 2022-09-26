import {
    id,
    UserObject
  } from '../constants/';
  import MemberPartial from '../client/rest/interfaces/IGuildMember';
  import { BotCord } from '../client/BotCord';
  import { Collection } from '@lowcordjs/collection/dist';
import { GuildRole } from './';
  export class GuildMember {
    private bot_cord: BotCord;
    // GuildMember data
    public user: UserObject
    public nick: string
    public avatar: string
    public roles: GuildRole[] = []
    public joinedAt: string
    public premiumSince: string
    public deaf: boolean
    public mute: boolean
    public pending: boolean
    public permissions: string
    public communicationDisabledUntil: string
    public collection: Collection<string, GuildMember>
    constructor(bot_cord: BotCord) {
      this.bot_cord = bot_cord;
      this.collection = this.bot_cord.members
    }
    async _run(body: MemberPartial, guildId: id) {
      const guildRole = new GuildRole(this.bot_cord)
      for (const role of body.roles){
        const r = await this.bot_cord.rest.getRole(guildId, role)
        guildRole._run(r)
        this.roles.push(guildRole)
      }
      this.joinedAt = body.joined_at
      this.deaf = body.deaf
      this.mute = body.mute

      if(body.user){
        this.user = body.user
      }else{
        this.user = null as any
      }
      if(body.nick){
        this.nick = body.nick
      }else{
        this.nick = null as any
      }
      if(body.avatar){
        this.avatar = body.avatar
      }else{
        this.avatar = null as any
      }
      if(body.premium_since){
        this.premiumSince = body.premium_since
      }else{
        this.premiumSince = null as any
      }
      if(body.pending){
        this.pending = body.pending
      }else{
        this.pending = null as any
      }
      if(body.permissions){
        this.permissions = body.permissions
      }else{
        this.permissions = null as any
      }
      if(body.communication_disabled_until){
        this.communicationDisabledUntil = body.communication_disabled_until
      }else{
        this.communicationDisabledUntil = null as any
      }
    
    }
  
  }
  