import {
    id,
    EmojiObject,
    UserObject
  } from '../constants/';
  import MemberPartial from '../client/rest/interfaces/IGuildMember';
  import { BotCord } from '../client/BotCord';
  import { Collection } from '@lowcordjs/collection/dist';

  export class MessageEmoji {
    private bot_cord: BotCord;
    // Emoji data
    public id: id
    public name: string
    public roles: string[]
    public user: UserObject
    public requireColons: boolean
    public managed: boolean
    public animated: boolean
    public available: boolean
    public collection: Collection<string, MessageEmoji>
    constructor(bot_cord: BotCord) {
      this.bot_cord = bot_cord;
      this.collection = this.bot_cord.emojis
    }
    async _run(body: EmojiObject) {
        if(body.animated){
            this.animated = body.animated
        }else{
            this.animated = null as any
        }
        if(body.available){
            this.available = body.available
        }else{
            this.available = null as any
        }
        if(body.id){
            this.id = body.id
        }else{
            this.id = null as any
        }
        if(body.managed){
            this.managed = body.managed
        }else{
            this.managed = null as any
        }
        if(body.name){
            this.name = body.name
        }else[
            this.name = null as any
        ]
        if(body.require_colons){
            this.requireColons = body.require_colons
        }else{
            this.requireColons = null as any
        }
        if(body.roles){
            this.roles = body.roles
        }else{
            this.roles = null as any
        }
        if(body.user){
            this.user = body.user
        }else{
            this.user = null as any
        }
    }
  
  }
  