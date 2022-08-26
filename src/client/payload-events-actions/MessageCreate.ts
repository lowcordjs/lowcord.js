import {Payload} from '../../constants/Payloads'
import {channelTypes, MessageObject} from '../../constants/Constants'
import { BotCord } from '../BotCord'



export class MessageCreatePayload {
    private client: BotCord
    private payload: Payload
     constructor(payload: Payload, client: BotCord) {
            this.client = client
            this.payload = payload
    }
    async run(){
       const channel = await this.client.rest.getChannel(this.payload.d.channel_id)
       if(channel){
        if(channel.type !== channelTypes.GUILD_TEXT) return
        const message = this.payload.d
        // NOTE: not finished yet.
        const messageData: MessageObject = { 
            // will finish soon
            
         }
         console.log(message)
        return messageData
       }
    }
}