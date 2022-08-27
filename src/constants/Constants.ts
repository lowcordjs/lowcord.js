import MemberPartial from '../client/rest/interfaces/IGuildMember'
import GuildObject from '../client/rest/interfaces/IGuildStructure'
import { Stream } from 'node:stream'
import {Collection, Message} from '../events-posts'
export enum OPCODE {
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
  TEN = 10,
  ELEVEN = 11,
  TWELVE = 12,
}
export enum INTENTS_OPTIONS {
  GUILDS = 1 << 0,
  GUILD_MEMBERS = 1 << 1,
  GUILD_BANS = 1 << 2,
  GUILD_EMOJIS_AND_STICKERS = 1 << 3,
  GUILD_INTEGRATIONS = 1 << 4,
  GUILD_WEBHOOKS = 1 << 5,
  GUILD_INVITES = 1 << 6,
  GUILD_VOICE_STATES = 1 << 7,
  GUILD_PRESENCES = 1 << 8,
  GUILD_MESSAGES = 1 << 9,
  GUILD_MESSAGE_REACTIONS = 1 << 10,
  GUILD_MESSAGE_TYPING = 1 << 11,
  DIRECT_MESSAGES = 1 << 12,
  DIRECT_MESSAGE_REACTIONS = 1 << 13,
  DIRECT_MESSAGE_TYPING = 1 << 14,
  MESSAGE_CONTENT = 1 << 15,
  GUILD_SCHEDULED_EVENTS = 1 << 16,
  AUTO_MODERATION_CONFIGURATION = 1 << 20,
  AUTO_MODERATION_EXECUTION = 1 << 21,
}
export enum INTENTS {
  GUILDS = INTENTS_OPTIONS.GUILDS,
  GUILD_MEMBERS = INTENTS_OPTIONS.GUILD_MEMBERS,
  GUILD_BANS = INTENTS_OPTIONS.GUILD_BANS,
  GUILD_EMOJIS_AND_STICKERS = INTENTS_OPTIONS.GUILD_EMOJIS_AND_STICKERS,
  GUILD_INTEGRATIONS = INTENTS_OPTIONS.GUILD_INTEGRATIONS,
  GUILD_WEBHOOKS = INTENTS_OPTIONS.GUILD_WEBHOOKS,
  GUILD_INVITES = INTENTS_OPTIONS.GUILD_INVITES,
  GUILD_VOICE_STATES = INTENTS_OPTIONS.GUILD_VOICE_STATES,
  GUILD_PRESENCES = INTENTS_OPTIONS.GUILD_PRESENCES,
  GUILD_MESSAGES = INTENTS_OPTIONS.GUILD_MESSAGES,
  GUILD_MESSAGE_REACTIONS = INTENTS_OPTIONS.GUILD_MESSAGE_REACTIONS,
  GUILD_MESSAGE_TYPING = INTENTS_OPTIONS.GUILD_MESSAGE_TYPING,
  DIRECT_MESSAGES = INTENTS_OPTIONS.DIRECT_MESSAGES,
  DIRECT_MESSAGE_REACTIONS = INTENTS_OPTIONS.DIRECT_MESSAGE_REACTIONS,
  DIRECT_MESSAGE_TYPING = INTENTS_OPTIONS.DIRECT_MESSAGE_TYPING,
  MESSAGE_CONTENT = INTENTS_OPTIONS.MESSAGE_CONTENT,
  GUILD_SCHEDULED_EVENTS = INTENTS_OPTIONS.GUILD_SCHEDULED_EVENTS,
  AUTO_MODERATION_CONFIGURATION = INTENTS_OPTIONS.AUTO_MODERATION_CONFIGURATION,
  AUTO_MODERATION_EXECUTION = INTENTS_OPTIONS.AUTO_MODERATION_EXECUTION,
  ALL = INTENTS_OPTIONS.AUTO_MODERATION_CONFIGURATION |
    INTENTS_OPTIONS.AUTO_MODERATION_EXECUTION |
    INTENTS_OPTIONS.DIRECT_MESSAGES |
    INTENTS_OPTIONS.DIRECT_MESSAGE_REACTIONS |
    INTENTS_OPTIONS.DIRECT_MESSAGE_TYPING |
    INTENTS_OPTIONS.GUILDS |
    INTENTS_OPTIONS.GUILD_BANS |
    INTENTS_OPTIONS.GUILD_EMOJIS_AND_STICKERS |
    INTENTS_OPTIONS.GUILD_INTEGRATIONS |
    INTENTS_OPTIONS.GUILD_INVITES |
    INTENTS_OPTIONS.GUILD_MEMBERS |
    INTENTS_OPTIONS.GUILD_MESSAGES |
    INTENTS_OPTIONS.GUILD_MESSAGE_REACTIONS |
    INTENTS_OPTIONS.GUILD_MESSAGE_TYPING |
    INTENTS_OPTIONS.GUILD_PRESENCES |
    INTENTS_OPTIONS.GUILD_SCHEDULED_EVENTS |
    INTENTS_OPTIONS.GUILD_VOICE_STATES |
    INTENTS_OPTIONS.GUILD_WEBHOOKS |
    INTENTS_OPTIONS.MESSAGE_CONTENT,
}
export enum MessageFlags {
  CROSSPOSTED = 1 << 0,
  IS_CROSSPOST = 1 << 1,
  SUPPRESS_EMBEDS = 1 << 2,
  SOURCE_MESSAGE_DELETED = 1 << 3,
  URGENT = 1 << 4,
  HAS_THREAD = 1 << 5,
  EPHEMERAL = 1 << 6,
  LOADING = 1 << 7,
  FAILED_TO_MENTION_SOME_ROLES_IN_THREAD = 1 << 8,
}
export enum channelTypes {
  GUILD_TEXT = 0,
  DM = 1,
  GUILD_VOICE = 2,
  GROUP_DM = 3,
  GUILD_CATEGORY = 4,
  GUILD_ANNOUNCEMENT = 5,
  ANNOUNCEMENT_THREAD = 10,
  PUBLIC_THREAD = 11,
  PRIVATE_THREAD = 12,
  GUILD_STAGE_VOICE = 13,
  GUILD_DIRECTORY = 14,
  GUILD_FORUM = 15,
}

export enum MessageActivityTypes {
  JOIN = 1,
  SPECTATE = 2,
  LISTEN = 3,
  JOIN_REQUEST = 5,
}

export enum ACTIVITY_TYPE {
  PLAYING = 0,
  STREAMING = 1,
  LISTENING = 2,
  WATCHING = 3,
  CUSTOM = 4,
  COMPETING = 5,
}

export enum ApplicationFlags {
  GATEWAY_PRESENCE = 1 << 12,
  GATEWAY_PRESENCE_LIMITED = 1 << 13,
  GATEWAY_GUILD_MEMBERS = 1 << 14,
  GATEWAY_GUILD_MEMBERS_LIMITED = 1 << 15,
  VERIFICATION_PENDING_GUILD_LIMIT = 1 << 16,
  EMBEDDED = 1 << 17,
  GATEWAY_MESSAGE_CONTENT = 1 << 18,
  GATEWAY_MESSAGE_CONTENT_LIMITED = 1 << 19,
}

export enum InteractionType {
  PING = 1,
  APPLICATION_COMMAND = 2,
  MESSAGE_COMPONENT = 3,
  APPLICATION_COMMAND_AUTOCOMPLETE = 4,
  MODAL_SUBMIT = 5,
}

export enum Permissions {
  CREATE_INSTANT_INVITE = 1 << 0,
  KICK_MEMBERS = 1 << 1,
  BAN_MEMBERS = 1 << 2,
  ADMINISTRATOR  = 1 << 3,
  MANAGE_CHANNELS = 1 << 4,
  MANAGE_GUILD = 1 << 5,
  ADD_REACTIONS = 1 << 6,
  VIEW_AUDIT_LOG = 1 << 7,
  PRIORITY_SPEAKER = 1 << 8,
  STREAM = 1 << 9,
  VIEW_CHANNEL = 1 << 10,
  SEND_MESSAGES = 1 << 11,
  SEND_TTS_MESSAGES = 1 << 12,
  MANAGE_MESSAGES = 1 << 13,
  EMBED_LINKS = 1 << 14,
  ATTACH_FILES = 1 << 15,
  READ_MESSAGE_HISTORY = 1 << 16,
  MENTION_EVERYONE = 1 << 17,
  USE_EXTERNAL_EMOJIS = 1 << 18,
  VIEW_GUILD_INSIGHTS = 1 << 19,
  CONNECT = 1 << 20,
  SPEAK = 1 << 21,
  MUTE_MEMBERS = 1 << 22,
  DEAFEN_MEMBERS = 1 << 23,
  MOVE_MEMBERS = 1 << 24,
  USE_VAD = 1 << 25,
  CHANGE_NICKNAME = 1 << 26,
  MANAGE_NICKNAMES = 1 << 27,
  MANAGE_ROLES = 1 << 28,
  MANAGE_WEBHOOKS = 1 << 29,
  MANAGE_EMOJIS_AND_STICKERS = 1 << 30,
  USE_APPLICATION_COMMANDS = 1 << 31,
  REQUEST_TO_SPEAK = 1 << 32,
  MANAGE_EVENTS = 1 << 33,
  MANAGE_THREADS = 1 << 34,
  CREATE_PUBLIC_THREADS = 1 << 35,
  CREATE_PRIVATE_THREADS = 1 << 36,
  USE_EXTERNAL_STICKERS = 1 << 37,
  SEND_MESSAGES_IN_THREADS = 1 << 38,
  USE_EMBEDDED_ACTIVITIES = 1 << 39,
  MODERATE_MEMBERS = 1 << 40
}
export enum ChannelFlags {
  PINNED = 1 << 1
}

export enum VideoQualityModes {
  AUTO = 1,
  FULL = 2
}

export enum ApplicationCommandOptionType {
  SUB_COMMAND = 1,
  SUB_COMMAND_GROUP = 2,
  STRING = 3,
  INTEGER = 4,
  BOOLEAN = 5,
  USER = 6,
  CHANNEL = 7,
  ROLE = 8,
  MENTIONABLE = 9,
  NUMBER = 10,
  ATTACHMENT = 11
}

export enum ComponentTypes {
  ActionRow = 1,
  Button = 2,
  SelectMenu = 3,
  TextInput = 4
}

export enum StickerFormatType {
  PNG = 1,
  APNG = 2,
  LOTTIE = 3
}

export enum StickerTypes {
  STANDARD = 1,
  GUILD = 2
}

export interface BotCordOptions {
  intents: number[];
}

export interface ClientInfo {
  verified: boolean | null;
  username: string | null;
  mfa_enabled: boolean | null;
  id: string | null;
  flags: number | null;
  discriminator: string | null;
  bot: boolean | null;
  avatarUrl: string | null;
  avatarCode: string | null;
  nameWithTag: string | null;
  guilds: {
    channels: any[] | null;
    emojis: any[] | null;
    roles: any[] | null;
    users: any[] | null;
    features: string[] | null;
    stickers?: any[] | null;
  };
}

export interface IprovideStatus {
  since?: null;
  activities: {
    name: string;
    type: number;
    url?: string;
  }[];
  status: 'online' | 'dnd' | 'idle' | 'invisible' | 'offline';
  afk: boolean;
}

export interface UserObject {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  bot?: boolean;
  system?: boolean;
  mfaEnabled?: boolean;
  banner?: string | null;
  accent_color?: number | null;
  locale?: string;
  verified?: boolean;
  flags?: number;
  premiumType?: number;
  publicFlags?: number;
  nameWithTag: string;
  avatarCode: string | null;
  avatarUrl: string | null;
}

export interface RoleTagsStructure {
  botId: string;
  integrationId: string;
  premiumSubscribe: null;
}

export interface RoleObject {
  id: string;
  name: string;
  color: number;
  hoist: boolean;
  icon?: string | null;
  unicodeEmoji?: string | null;
  position: number;
  permissions: string;
  managed: boolean;
  mentionable: boolean;
  tags?: RoleTagsStructure;
}

export interface AttachmentObject {
  id: string;
  filename: string;
  description?: string;
  contentType?: string;
  size: number;
  url: string;
  proxyUrl: string;
  height: string | null;
  width: string | null;
  ephemeral?: boolean;
}

export interface EmbedFieldStructure {
  name: string;
  value: string;
  inline?: boolean;
}

export interface EmbedFooterStructure {
  text: string;
  iconUrl?: string;
}

export interface EmbedAuthorStructure {
  name: string;
  url?: string;
  iconUrl: string;
}

export interface EmbedProviderStructure {
  name?: string;
  url?: string;
}

export interface EmbedImageStructure {
  url: string;
  height?: string;
  width?: string;
}

export interface EmbedVideoStructure {
  url?: string;
  height?: string;
  width?: string;
}

export interface EmbedThumnailStructure {
  url: string;
  height?: number;
  width?: number;
}

export interface EmbedObject {
  title?: string;
  type?: string;
  description?: string;
  url?: string;
  timestamp?: string;
  color?: number;
  footer?: EmbedFooterStructure;
  image?: EmbedImageStructure;
  thumbnail?: EmbedThumnailStructure;
  video?: EmbedVideoStructure;
  provider?: EmbedProviderStructure;
  author?: EmbedAuthorStructure;
  fields?: EmbedFieldStructure[];
}

export interface EmojiObject {
  id: string | null;
  name: string | null;
  roles: string[];
  user?: UserObject;
  require_colons?: boolean;
  managed?: boolean;
  animated?: boolean;
  available?: boolean;
}

export interface ReactionObject {
  count: number;
  me: boolean;
  emoji: EmojiObject;
}

export interface MessageActivityStructure {
  type: number;
  partyId?: string;
}

export interface TeamMemberObject {
  membershipState: number;
  permissions: string[];
  teamId: string;
  user: UserObject;
}

export interface TeamObject {
  icon: string | null;
  id: string;
  members: TeamMemberObject[];
  name: string;
  ownerUserId: string;
}

export interface installParamObject {
  scopes: string[];
  permissions: string;
}

export interface MessageRefrenceStructure {
  messageId?: string;
  channelId: string;
  guildId?: string;
  failIfNotExists?: boolean;
}

export interface ApplicationObject {
  id: string;
  name: string;
  icon: string | null;
  description: string;
  rpc_origins?: string[];
  botPublic: boolean;
  botRequireCodeGrant: boolean;
  termsOfServiceUrl?: string;
  privacyPolicyUrl?: string;
  owner?: UserObject;
  verifyKey: string;
  team: TeamObject;
  guildId?: string;
  primarySkuId?: string;
  slug?: string;
  coverImage?: string;
  flags?: number;
  tags?: string[];
  installParams?: installParamObject;
  customInstallUrl?: string;
}

export interface MessageInteractionObject {
  id: string;
  type:
    | InteractionType.APPLICATION_COMMAND
    | InteractionType.APPLICATION_COMMAND_AUTOCOMPLETE
    | InteractionType.MESSAGE_COMPONENT
    | InteractionType.MODAL_SUBMIT
    | InteractionType.PING;
  name: string,
  user: UserObject,
  member?: MemberPartial
}

export interface ApplicationCommandData{
  id: string,
  name: string,
  type: number,
  resolved?: ResolvedDataObject,
  options?: ApplicationCommandDataOption[],
  guildId: string,
  targetId: string
}

export interface ApplicationCommandDataOption {
  name: string,
  type: number,
  value?: string | number,
  options?: ApplicationCommandDataOption[],
  focused?: boolean
}



export interface MessageComponentDataStructure {
  customId: string,
  componentType: number,
  values?: SelectOptionStructure[]
}

export interface SelectMenuStructure {
  type: number,
  customId: string,
  options: SelectOptionStructure,
  placeholder?: string,
  min_values?: number,
  max_values?: number,
  disabled?: boolean
}

export interface SelectOptionStructure {
  label: string,
  value: string,
  description?: string,
  emoji?:EmojiObject,
  default?: boolean
}

export interface ResolvedDataObject {
  users?: Collection<string, UserObject>,
  members?: Collection<string, MemberPartial>,
  roles?: Collection<string, RoleObject>,
  channels?: Collection<string, ChannelObject>,
  messages?: Collection<string, MessageObject>,
  attachments?: Collection<string, AttachmentObject>

}

export interface ModalSubmitData {
  customId: string,
  components: MessageComponentDataStructure[]
}

export interface ChannelObject {
  id: string,
  type: number,
  guild_id?: string,
  position?: number,
  permission_overwrites?: PermissionOverwritesObject,
  name?: string | null,
  topic?: string | null,
  nsfw?: boolean,
  last_messageId?: string | null,
  bitrate?: number,
  user_limit?: number,
  rate_limit_per_user?: number,
  recipients?: UserObject[],
  icon?: string | null,
  owner_id?: string | null,
  application_id?: string,
  parent_id?: string | null,
  last_pin_timestamp?: string | null,
  rtc_region?: string | null,
  video_quality_mode?: number,
  message_count?: number,
  member_count?: number,
  thread_metadata?: ThreadMetadateObject,
  member?: ThreadMemberObject,
  default_auto_archive_duration?: number,
  permissions?: string,
  flags?: number,
  total_message_sent?: number,
  sendMessage(options: MessageSendOptions): Promise<Message>
}

export interface ThreadMemberObject {
  id?: string,
  userId?: string,
  joinTimestamp: string,
  flags: number
}


export interface ThreadMetadateObject {
  archived: boolean,
  autoArchiveDuration: number,
  archiveTimestamp: string,
  locked: boolean,
  invitable: boolean,
  createTimestamp?: string | null
}
export interface PermissionOverwritesObject {
  id: string,
  type: number,
  allow: string,
  deny: string
}

export interface Interaction {
  id: string,
  applicationId: string,
  type: InteractionType.PING | InteractionType.APPLICATION_COMMAND | InteractionType.APPLICATION_COMMAND_AUTOCOMPLETE | InteractionType.MESSAGE_COMPONENT | InteractionType.MODAL_SUBMIT,
  data?: ApplicationCommandData,
  guildId: string,
  channelId: string,
  member?: MemberPartial,
  user?: UserObject,
  token: string,
  version: 1,
  message?: MessageObject,
  appPermissions?: string,
  locale?: string,
  guildLocale?: string
}

export interface StickerItem {
  id: string,
  name: string,
  formatType: number
}

export interface Sticker{
  id: string,
  pack_id?: string,
  name: string,
  description: string | null,
  tags: string,
  asset?: string,
  type: number,
  format_type: number,
  available?: boolean,
  guildId?: string,
  user?: UserObject,
  sort_value?: number
}

export interface MessageMentionsMember {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  bot?: boolean;
  system?: boolean;
  mfaEnabled?: boolean;
  banner?: string | null;
  accent_color?: number | null;
  locale?: string;
  verified?: boolean;
  flags?: number;
  premiumType?: number;
  publicFlags?: number;
  nameWithTag: string;
  avatarCode: string | null;
  avatarUrl: string | null;
  member: MemberPartial[]
}

export type ParseAllowedMentionsOption = "everyone" | "users" | "roles"

export interface MessageAllowedMentionsOption {
  parse?: ParseAllowedMentionsOption[],
  roles?: string[],
  users?: string[],
  replied_user?: boolean
}

export type FileType = string | Buffer | Stream

export interface MessageSendOptions {
  content?: string,
  tts?: boolean,
  embeds?: EmbedObject[],
  allowed_mentions?: MessageAllowedMentionsOption,
  message_reference?: MessageRefrenceStructure,
  components?: MessageComponentDataStructure[],
  sticker_ids?: string[],
  files?: FileType[],
  payload_json?: string,
  attachments?: AttachmentObject[],
  flags?: number
}

export interface MessageObject {
  id: string,
  channel_id: string,
  channel: ChannelObject,
  guild: GuildObject,
  author: UserObject
  content: string,
  timestamp: string,
  edited_timestamp: string | null,
  tts: boolean,
  mention_everyone: boolean,
  mentions: MessageMentionsMember[],
  mention_roles: RoleObject[],
  mention_channels?: ChannelMentionObject[],
  attachments: AttachmentObject[],
  embeds: EmbedObject[],
  reactions?: ReactionObject[],
  nonce?: number | string,
  pinned: boolean,
  webhook_id?: string,
  type: number,
  member?: MemberPartial
  activity?: MessageActivityStructure,
  application?: ApplicationObject,
  application_id?: string,
  message_reference?: MessageRefrenceStructure,
  flags?: number,
  referenced_message?: MessageObject | null,
  interaction?: MessageInteractionObject,
  thread?: ChannelObject,
  components?: MessageComponentDataStructure[],
  sticker_items?: StickerItem[],
  stickers?: Sticker[],
  position?: number
  guild_id: string,
}

export interface ChannelMentionObject {
  id: string;
  guildId: string;
  type:
    | channelTypes.ANNOUNCEMENT_THREAD
    | channelTypes.DM
    | channelTypes.GROUP_DM
    | channelTypes.GUILD_ANNOUNCEMENT
    | channelTypes.GUILD_CATEGORY
    | channelTypes.GUILD_DIRECTORY
    | channelTypes.GUILD_FORUM
    | channelTypes.GUILD_STAGE_VOICE
    | channelTypes.GUILD_TEXT
    | channelTypes.GUILD_VOICE
    | channelTypes.PRIVATE_THREAD
    | channelTypes.PUBLIC_THREAD;
  name: string;
}

export const API_VERSION = 'v10';
export const APi_URL = 'https://discord.com/api';
