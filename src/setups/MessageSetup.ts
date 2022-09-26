import { BotCord, MessageObject, Guild, GuildTextChannel, ChannelObject } from '../';
import { CDNRoutes, ImageFormat } from 'discord-api-types/v10'
export class MessageSetup {
    constructor(private bot_cord: BotCord, public message: MessageObject){
        this.bot_cord = bot_cord
        this.message = message
    }
    async _run(){
      const channelData: ChannelObject = await this.bot_cord.rest.getChannel(this.message.channel_id)
      const channel = new GuildTextChannel(this.bot_cord)
      channel._run(channelData)
      this.message.channel = channel
      if(channel){
        const guildData = await this.bot_cord.rest.getGuild(this.message.guild_id)
        const guild = new Guild(this.bot_cord)
        guild._run(guildData)
         if(this.message.guild_id){
             this.message.guild =  guild as any
             this.message.guild.iconUrl = `https://cdn.discordapp.com/${CDNRoutes.guildIcon(guild.id, guild.icon as any, guild.icon?.startsWith('_a') ? ImageFormat.GIF : ImageFormat.PNG)}`
         }
         if(this.message.author){
             this.message.author.avatarCode = this.message.author.avatar
             this.message.author.avatarUrl = `https://cdn.discordapp.com${CDNRoutes.userAvatar(this.message.author.id, this.message.author.avatarCode as any, this.message.author.avatarCode?.startsWith('_a') ? ImageFormat.GIF : ImageFormat.PNG )}`
             this.message.author.nameWithTag = `${this.message.author.username}#${this.message.author.discriminator}`;
         }
      }
    }

}
