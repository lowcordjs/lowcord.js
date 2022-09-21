import { BotCord, MessageObject, Guild, GuildTextChannel, ChannelObject } from '../';
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
             this.message.guild.iconUrl = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
         }
         if(this.message.author){
             this.message.author.avatarCode = this.message.author.avatar
             this.message.author.avatarUrl = `https://cdn.discordapp.com/avatars/${this.message.author.id}/${this.message.author.avatarCode}`
             this.message.author.nameWithTag = `${this.message.author.username}#${this.message.author.discriminator}`;
         }
      }
    }

}
