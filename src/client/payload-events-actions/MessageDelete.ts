import {Payload} from '../../constants/Payloads'
import {ChannelObject, channelTypes, MessageObject} from '../../constants'
import { BotCord } from '../BotCord'
import {GuildTextChannel, Message, Guild} from '../../events-posts'
import {Events} from '../../constants/Events'


export class MessageDeletePayload{
    private bot_cord: BotCord
    private payload: Payload
     constructor(payload: Payload, bot_cord: BotCord) {
            this.bot_cord = bot_cord
            this.payload = payload
    }
    async run(){
        const channelData: ChannelObject = await this.bot_cord.rest.getChannel(this.payload.d.channel_id)
        const channel = new GuildTextChannel(this.bot_cord)
        channel.run(channelData)
       if(channel){
        if(channel.type !== channelTypes.GUILD_TEXT) return
        const message: MessageObject = this.payload.d
        const guildData = await this.bot_cord.rest.getGuild(message.guild_id)
        const guild: Guild = new Guild(this.bot_cord)
        guild.define(guildData)
        console.log(channel._messages.get(message.id))
        const messageData: MessageObject = await this.bot_cord.rest.getMessage(guild.id,channel.id, message.id)
        if(message.guild_id){
            messageData.guild = guild as any
            messageData.guild.iconUrl = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
        }
        if(messageData.author){
            messageData.author.avatarCode = message.author.avatar
            messageData.author.avatarUrl = `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatarCode}`
            messageData.author.nameWithTag = `${message.author.username}#${message.author.discriminator}`
        }
        messageData.channel = channel as ChannelObject

        const messageResult = new Message(this.bot_cord)
         messageResult.define(messageData)
        this.bot_cord.emit(Events.MESSAGE_DELETE, messageResult)
        
       }
    }
}