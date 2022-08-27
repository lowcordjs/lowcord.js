import {
    ApplicationObject,
  AttachmentObject,
  ChannelMentionObject,
  ChannelObject,
  EmbedObject,
  MessageActivityStructure,
  MessageComponentDataStructure,
  MessageInteractionObject,
  MessageMentionsMember,
  MessageObject,
  MessageRefrenceStructure,
  ReactionObject,
  RoleObject,
  Sticker,
  StickerItem,
  UserObject,
} from '../constants/';
import MemberPartial from '../client/rest/interfaces/IGuildMember'
import { BotCord } from '../client/BotCord';
import GuildObject from '../client/rest/interfaces/IGuildStructure';
import { GuildTextChannel } from './';

export class Message{
  private bot_cord: BotCord;
  // message data
  public id: string | null;
  public channelId: string | null;
  public channel: ChannelObject | null;
  public guild: GuildObject | null;
  public author: UserObject | null;
  public content: string | null;
  public timestamp: string | null;
  public editedTimestamp: string | null;
  public tts: boolean | null;
  public mentionEveryone: boolean | null;
  public mentions: MessageMentionsMember[] | null;
  public mentionRoles: RoleObject[] | null;
  public mentionChannels: ChannelMentionObject[] | null;
  public attachments: AttachmentObject[] | null;
  public embeds: EmbedObject[] | null;
  public reactions: ReactionObject[] | null;
  public nonce: number | string | null;
  public pinned: boolean | null;
  public webhookId: string | null;
  public type: number | null;
  public member: MemberPartial | null;
  public activity: MessageActivityStructure  | null
  public application: ApplicationObject  | null
  public applicationId: string | null
  public messageReference: MessageRefrenceStructure | null
  public flags: number | null
  public referencedMessage: MessageObject | null
  public interaction: MessageInteractionObject | null
  public thread: ChannelObject | null
  public components: MessageComponentDataStructure[] | null
  public stickerItems: StickerItem[] | null
  public stickers: Sticker[] | null
  public position: number | null
  public guildId: string | null

  constructor(bot_cord: BotCord) {
    this.bot_cord = bot_cord;
  }
  define(body: MessageObject){
    if(body.activity){
        this.activity = body.activity
    }else{
        this.activity = null
    }

    if(body.application) {
        this.application = body.application
    }else{
        this.application ??= null
    }

    if(body.application_id){
        this.applicationId = body.application_id
    }else{
        this.applicationId = null
    }

    if(body.attachments){
        this.attachments = body.attachments
    }else{
        this.attachments = null
    }

    if(body.author){
        this.author = body.author
    }else{
        this.author = null
    }

    if(body.channel){
        this.channel = body.channel
    }else{
        this.channel = null
    }

    if(body.channel_id){
        this.channelId = body.channel_id
    }else{
        this.channelId = null
    }

    if(body.components){
        this.components = body.components
    }else{
        this.components = null
    }

    if(body.content){
        this.content = body.content
    }else{
        this.content = null
    }

    if(body.edited_timestamp){
        this.editedTimestamp = body.edited_timestamp
    }else{
        this.editedTimestamp = null
    }

    if(body.embeds){
        this.embeds = body.embeds
    }else{
        this.embeds = null
    }

    if(body.flags){
        this.flags = body.flags
    }else{
        this.flags = null
    }

    if(body.guild){
        this.guild = body.guild
    }else{
        this.guild = null
    }

    if(body.guild_id){
        this.guildId = body.guild_id
    }else{
        this.guildId = null
    }

    if(body.id){
        this.id = body.id
    }else{
        this.id = null
    }

    if(body.interaction){
        this.interaction = body.interaction
    }else{
        this.interaction = null
    }

    if(body.member){
        this.member = body.member
    }else{
        this.member = null
    }

    if(body.mention_channels){
        this.mentionChannels = body.mention_channels
    }else{
        this.mentionChannels = null
    }

    if(body.mention_everyone){
        this.mentionEveryone = body.mention_everyone
    }else{
        this.mentionEveryone = null
    }

    if(body.mention_roles){
        this.mentionRoles = body.mention_roles
    }else{
        this.mentionRoles = null
    }

    if(body.mentions){
        this.mentions = body.mentions
    }else{
        this.mentions = null
    }

    if(body.message_reference){
        this.messageReference = body.message_reference
    }else{
        this.messageReference = null
    }

    if(body.nonce){
        this.nonce = body.nonce
    }else{
        this.nonce = null
    }

    if(body.pinned){
        this.pinned = body.pinned
    }else{
        this.pinned = null
    }

    if(body.position){
        this.position = body.position
    }else{
        this.position = null
    }

    if(body.reactions){
        this.reactions = body.reactions
    }else{
        this.reactions = null
    }

    if(body.referenced_message){
        this.referencedMessage = body.referenced_message
    }else{
        this.referencedMessage = null
    }

    if(body.sticker_items){
        this.stickerItems = body.sticker_items
    }else{
        this.stickerItems = null
    }

    if(body.stickers){
        this.stickers = body.stickers
    }else{
        this.stickers = null
    }

    if(body.thread){
        this.thread = body.thread
    }else{
        this.thread = null
    }

    if(body.timestamp){
        this.timestamp = body.timestamp
    }else{
        this.timestamp = null
    }

    if(body.tts){
        this.tts = body.tts
    }else{
        this.tts = null
    }

    if(body.type){
        this.type = body.type
    }else{
        this.type = null
    }

    if(body.webhook_id){
        this.webhookId = body.webhook_id
    }else{
        this.webhookId = null
    }
  }
}
