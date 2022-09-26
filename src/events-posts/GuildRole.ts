import {
    id,
    RoleObject,
    RoleTagsStructure
  } from '../constants/';
  import { BotCord } from '../client/BotCord';
  import { Collection } from '@lowcordjs/collection/dist';
  import { CDNRoutes, ImageFormat } from 'discord-api-types/v10'
  export class GuildRole {
    private bot_cord: BotCord;
    // Emoji data
    public id: id
    public name: string
    public color: number
    public hoist: boolean
    public icon: string
    public unicodeEmoji: string
    public position: number
    public permissions: string
    public managed: boolean
    public mentionable: boolean
    public tags: RoleTagsStructure
    public collection: Collection<string, GuildRole>
    constructor(bot_cord: BotCord) {
      this.bot_cord = bot_cord;
      this.collection = this.bot_cord.roles
    }
    async _run(body: RoleObject) {
        this.id = body.id
        this.name = body.name
        this.color = body.color
        this.hoist = body.hoist
        this.position = body.position
        this.permissions = body.permissions
        this.managed = body.managed
        this.mentionable = body.mentionable

        if(body.icon){
            this.icon = body.icon
        }else{
            this.icon = null as any
        }
        if(body.unicode_emoji){
            this.unicodeEmoji = body.unicode_emoji
        }else{
            this.unicodeEmoji = null as any
        }
        if(body.tags){
            this.tags = body.tags
        }else{
            this.tags = null as any
        }
    }
    get iconURL() {
        return `https://cdn.discordapp.com${CDNRoutes.roleIcon(this.id, this.icon, ImageFormat.PNG)}`
    }
  
  }
  