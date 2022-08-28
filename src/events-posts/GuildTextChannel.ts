import { ChannelObject, MessageSendOptions, channelTypes, MessageObject, PermissionOverwritesObject, UserObject, ThreadMemberObject, ThreadMetadateObject } from '../constants/';
import { BotCord } from '../client/BotCord';
import {Collection} from './'

export class GuildTextChannel {
  private bot_cord: BotCord;
  private body: ChannelObject;

  public id: string | null
  public type: number | null
  public guildId: string| null
  public position: number| null
  public permissionOverwrites: PermissionOverwritesObject| null
  public name: string | null
  public topic: string | null
  public nsfw: boolean | null
  public lastMessageId: string | null
  public bitrate: number | null
  public userLimit: number | null
  public rateLimitPerUser: number | null
  public recipients: UserObject[] | null
  public icon: string | null
  public ownerId: string | null
  public applicationId: string | null
  public parentId: string | null
  public lastPinTimestamp: string | null
  public rtcRegion: string | null
  public videoQualityMode: number | null
  public messageCount: number | null
  public memberCount: number | null
  public threadMetadata: ThreadMetadateObject | null
  public member: ThreadMemberObject | null
  public defaultAutoArchiveDuration: number | null
  public permissions: string | null
  public flags: number | null
  public totalMessageSent: number | null
  
  messages: Collection<string, MessageObject>
  constructor(bot_cord: BotCord) {
    this.bot_cord = bot_cord;
  }

  run(body: ChannelObject){
    this.type = body.type
    if(body.application_id){
      this.applicationId = body.application_id
    }else{
      this.applicationId = null
    }

    if(body.bitrate){
      this.bitrate = body.bitrate
    }else{
      this.bitrate = null
    }

    if(body.default_auto_archive_duration){
      this.defaultAutoArchiveDuration = body.default_auto_archive_duration
    }else{
      this.defaultAutoArchiveDuration = null
    }

    if(body.flags){
      this.flags = body.flags
    }else{
      this.flags = null
    }

    if(body.guild_id){
      this.guildId = body.guild_id
    }else{
      this.guildId = null
    }

    if(body.icon){
      this.icon = body.icon
    }else{
      this.icon = null
    }

    if(body.id){
      this.id = body.id
    }else{
      this.id = null
    }

    if(body.last_messageId){
      this.lastMessageId = body.last_messageId
    }else{
      this.lastMessageId = null
    }

    if(body.last_pin_timestamp){
      this.lastPinTimestamp = body.last_pin_timestamp
    }else{
      this.lastPinTimestamp = null
    }

    if(body.member){
      this.member = body.member
    }else{
      this.member = null
    }

    if(body.member_count){
      this.memberCount = body.member_count
    }else{
      this.memberCount = null
    }

    if(body.message_count){
      this.messageCount = body.message_count
    }else{
      this.messageCount = null
    }

    if(body.name){
      this.name = body.name
    }else{
      this.name = null
    }

    if(body.nsfw){
      this.nsfw = body.nsfw
    }else{
      this.nsfw = null
    }

    if(body.owner_id){
      this.ownerId = body.owner_id
    }else{
      this.ownerId = null
    }

    if(body.parent_id){
      this.parentId = body.parent_id
    }else{
      this.parentId = null
    }

    if(body.permission_overwrites){
      this.permissionOverwrites = body.permission_overwrites
    }else{
      this.permissionOverwrites = null
    }

    if(body.permissions){
      this.permissions = body.permissions
    }else{
      this.permissions = null
    }

    if(body.position){
      this.position = body.position
    }else{
      this.position = null
    }

    if(body.rate_limit_per_user){
      this.rateLimitPerUser = body.rate_limit_per_user
    }else{
      this.rateLimitPerUser = null
    }

    if(body.recipients){
      this.recipients = body.recipients
    }else{
      this.recipients = null
    }

    if(body.rtc_region){
      this.rtcRegion = body.rtc_region
    }else{
      this.rtcRegion = null
    }

    if(body.thread_metadata){
      this.threadMetadata = body.thread_metadata
    }else{
      this.threadMetadata = null
    }

    if(body.topic){
      this.topic = body.topic
    }else{
      this.topic = null
    }

    if(body.total_message_sent){
      this.totalMessageSent = body.total_message_sent
    }else{
      this.totalMessageSent = null
    }


    if(body.user_limit){
      this.userLimit = body.user_limit
    }else{
      this.userLimit = null
    }

    if(body.video_quality_mode){
      this.videoQualityMode = body.video_quality_mode
    }else{
      this.videoQualityMode = null
    }
  }

  async sendMessage(options: MessageSendOptions) {
    if(this.type !== channelTypes.GUILD_TEXT) return
    await this.bot_cord.rest.sendMessageChannel(this.id as string, options)
  }
}
