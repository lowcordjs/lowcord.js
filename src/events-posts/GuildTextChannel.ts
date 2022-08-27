import { ChannelObject, MessageSendOptions, channelTypes, MessageObject } from '../constants/';
import { BotCord } from '../client/BotCord';
import {Collection} from './'

export class GuildTextChannel {
  private bot_cord: BotCord;
  private body: ChannelObject;
  messages: Collection<string, MessageObject>
  constructor(bot_cord: BotCord, body: ChannelObject) {
    this.bot_cord = bot_cord;
    this.body = body;
  }

  async sendMessage(options: MessageSendOptions) {
    if(this.body.type !== channelTypes.GUILD_TEXT) return
    await this.bot_cord.rest.sendMessageChannel(this.body.id, options)
  }
}
