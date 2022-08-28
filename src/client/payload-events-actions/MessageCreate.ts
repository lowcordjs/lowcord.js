import {Payload} from '../../constants/Payloads'
import {ChannelObject, channelTypes, MessageObject} from '../../constants'
import GuildObject from '../rest/interfaces/IGuildStructure'
import { BotCord } from '../BotCord'
import {GuildTextChannel, Message} from '../../events-posts'
import {Events} from '../../constants/Events'


export class MessageCreatePayload{
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
        let guild: GuildObject = await this.bot_cord.rest.getGuild(message.guild_id)
        if(!message.guild_id) guild = {} as any
        // NOTE: not finished yet.
        
        const messageData: MessageObject = message
        if(message.guild_id){
            messageData.guild = guild
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
        this.bot_cord.emit(Events.MESSAGE_CREATE, messageResult)
        
       }
    }
}