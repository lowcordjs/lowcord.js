import { ChannelObject, MessageSendOptions, channelTypes, MessageObject, PermissionOverwritesObject, UserObject, ThreadMemberObject, ThreadMetadateObject } from '../constants/';
import { BotCord } from '../client/BotCord';
import {Collection} from './'

export class GuildTextChannel {
  private bot_cord: BotCord;

  public id: string
  public type: number
  public guildId: string
  public position: number
  public permissionOverwrites: PermissionOverwritesObject
  public name: string
  public topic: string
  public nsfw: boolean
  public lastMessageId: string
  public bitrate: number
  public userLimit: number
  public rateLimitPerUser: number
  public recipients: UserObject[]
  public icon: string
  public ownerId: string
  public applicationId: string
  public parentId: string
  public lastPinTimestamp: string
  public rtcRegion: string
  public videoQualityMode: number
  public messageCount: number
  public memberCount: number
  public threadMetadata: ThreadMetadateObject
  public member: ThreadMemberObject
  public defaultAutoArchiveDuration: number
  public permissions: string
  public flags: number
  public totalMessageSent: number

  _messages: Collection<string, MessageObject> = new Collection()
  constructor(bot_cord: BotCord) {
    this.bot_cord = bot_cord;
  }

  run(body: ChannelObject){
    this.type = body.type
    
    if(body.application_id){
      this.applicationId = body.application_id
    }else{
      this.applicationId = null as any
    }

    if(body.bitrate){
      this.bitrate = body.bitrate
    }else{
      this.bitrate = null as any
    }

    if(body.default_auto_archive_duration){
      this.defaultAutoArchiveDuration = body.default_auto_archive_duration
    }else{
      this.defaultAutoArchiveDuration = null as any
    }

    if(body.flags){
      this.flags = body.flags
    }else{
      this.flags = null as any
    }

    if(body.guild_id){
      this.guildId = body.guild_id
    }else{
      this.guildId = null as any
    }

    if(body.icon){
      this.icon = body.icon
    }else{
      this.icon = null as any
    }

    if(body.id){
      this.id = body.id
    }else{
      this.id = null as any
    }

    if(body.last_messageId){
      this.lastMessageId = body.last_messageId
    }else{
      this.lastMessageId = null as any
    }

    if(body.last_pin_timestamp){
      this.lastPinTimestamp = body.last_pin_timestamp
    }else{
      this.lastPinTimestamp = null as any
    }

    if(body.member){
      this.member = body.member
    }else{
      this.member = null as any
    }

    if(body.member_count){
      this.memberCount = body.member_count
    }else{
      this.memberCount = null as any
    }

    if(body.message_count){
      this.messageCount = body.message_count
    }else{
      this.messageCount = null as any
    }

    if(body.name){
      this.name = body.name
    }else{
      this.name = null as any
    }

    if(body.nsfw){
      this.nsfw = body.nsfw
    }else{
      this.nsfw = null as any
    }

    if(body.owner_id){
      this.ownerId = body.owner_id
    }else{
      this.ownerId = null as any
    }

    if(body.parent_id){
      this.parentId = body.parent_id
    }else{
      this.parentId = null as any
    }

    if(body.permission_overwrites){
      this.permissionOverwrites = body.permission_overwrites
    }else{
      this.permissionOverwrites = null as any
    }

    if(body.permissions){
      this.permissions = body.permissions
    }else{
      this.permissions = null as any
    }

    if(body.position){
      this.position = body.position
    }else{
      this.position = null as any
    }

    if(body.rate_limit_per_user){
      this.rateLimitPerUser = body.rate_limit_per_user
    }else{
      this.rateLimitPerUser = null as any
    }

    if(body.recipients){
      this.recipients = body.recipients
    }else{
      this.recipients = null as any
    }

    if(body.rtc_region){
      this.rtcRegion = body.rtc_region
    }else{
      this.rtcRegion = null as any
    }

    if(body.thread_metadata){
      this.threadMetadata = body.thread_metadata
    }else{
      this.threadMetadata = null as any
    }

    if(body.topic){
      this.topic = body.topic
    }else{
      this.topic = null as any
    }

    if(body.total_message_sent){
      this.totalMessageSent = body.total_message_sent
    }else{
      this.totalMessageSent = null as any
    }


    if(body.user_limit){
      this.userLimit = body.user_limit
    }else{
      this.userLimit = null as any
    }

    if(body.video_quality_mode){
      this.videoQualityMode = body.video_quality_mode
    }else{
      this.videoQualityMode = null as any
    }
  }

  async sendMessage(options: MessageSendOptions | string) {
    if(this.type !== channelTypes.GUILD_TEXT) return
    if(typeof options === 'string'){
      await this.bot_cord.rest.sendMessageChannel(this.id as string, {content: options})
    }

    await this.bot_cord.rest.sendMessageChannel(this.id as string, options as MessageSendOptions)
  }



}
