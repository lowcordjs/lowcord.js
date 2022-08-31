import { BotCord } from '../client/BotCord';
import IGuildMember from '../client/rest/interfaces/IGuildMember';
import GuildObject from '../client/rest/interfaces/IGuildStructure';
import { EmojiObject, RoleObject, welcomeScreenObject, Sticker, fetchGuildMembersOptions, fetchGuildMember } from '../constants';

export class Guild {
  private bot_cord: BotCord;

  public id: string;
  public name: string;
  public icon: string | null;
  public splash: string | null;
  public discoverySplash: string | null;
  public ownerId: string;
  public permissions: string;
  public region: string | null;
  public afkChannelId: string | null;
  public afkTimeout: string;
  public widgetEnabled: boolean;
  public widgetChannelId: string | null;
  public verificationLevel: number;
  public defaultMessageNotifications: number;
  public explicitContentFilter: number;
  public roles: RoleObject[];
  public emojis: EmojiObject[];
  public features: [
    | 'ANIMATED_ICON'
    | 'VERIFIED'
    | 'NEWS'
    | 'VANITY_URL'
    | 'DISCOVERABLE'
    | 'MORE_EMOJI'
    | 'INVITE_SPLASH'
    | 'BANNER'
    | 'COMMUNITY',
  ];
  public mfaLevel: number;
  public applicationId: string;
  public systemChannelId: number | null;
  public systemChannelFlags: number;
  public rulesChannelId: number | null;
  public maxPresences: number | null;
  public maxMembers: number;
  public vanityUrlCode: string | null;
  public description: string | null;
  public banner: string | null;
  public premiumTier: number;
  public premiumSubscriptionCount: number;
  public preferredLocale: string;
  public publicUpdatesChannelId: string | number;
  public maxVideoChannelUsers: number;
  public memberCount: number;
  public presenceCount: number;
  public welcomeScreen: welcomeScreenObject;
  public nsfwLevel: number;
  public stickers: Sticker[];
  public premiumProgressBarEnabled: boolean;
  public iconHash: string | null;
  public iconUrl: string | null;

  constructor(bot_cord: BotCord) {
    this.bot_cord = bot_cord;
  }
  define(body: GuildObject) {
    if (body.afk_channel_id) {
      this.afkChannelId = body.afk_channel_id;
    } else {
      this.afkChannelId = null as any;
    }
    if (body.afk_timeout) {
      this.afkTimeout = body.afk_timeout as any;
    } else {
      this.afkTimeout = null as any;
    }
    if (body.application_id) {
      this.applicationId = body.application_id as any;
    } else {
      this.applicationId = null as any;
    }
    if (body.approximate_member_count) {
      this.memberCount = body.approximate_member_count;
    } else {
      this.memberCount = null as any;
    }
    if (body.approximate_presence_count) {
      this.presenceCount = body.approximate_presence_count;
    } else {
      this.presenceCount = null as any;
    }
    if (body.banner) {
      this.banner = body.banner;
    } else {
      this.banner = null;
    }
    if (body.default_message_notifications) {
      this.defaultMessageNotifications = body.default_message_notifications;
    } else {
      this.defaultMessageNotifications = null as any;
    }
    if (body.description) {
      this.description = body.description;
    } else {
      this.description = null;
    }
    if (body.discovery_splash) {
      this.discoverySplash = body.discovery_splash;
    } else {
      this.discoverySplash = null;
    }
    if (body.emojis) {
      this.emojis = body.emojis;
    } else {
      this.emojis = null as any;
    }
    if (body.explicit_content_filter) {
      this.explicitContentFilter = body.explicit_content_filter;
    } else {
      this.explicitContentFilter = null as any;
    }
    if (body.features) {
      this.features = body.features;
    } else {
      this.features = null as any;
    }
    if (body.icon) {
      this.icon = body.icon;
      this.iconUrl = `https://cdn.discordapp.com/icons/${body.id}/${body.icon}.png`;
    } else {
      this.icon = null;
      this.iconUrl = null;
    }
    if (body.icon_hash) {
      this.iconHash = body.icon_hash;
    } else {
      this.iconHash = null;
    }
    if (body.id) {
      this.id = body.id;
    } else {
      this.id = null as any;
    }
    if (body.max_members) {
      this.maxMembers = body.max_members;
    } else {
      this.maxMembers = null as any;
    }
    if (body.max_presences) {
      this.maxMembers = body.max_members as any;
    } else {
      this.maxMembers = null as any;
    }
    if (body.max_video_channel_users) {
      this.maxVideoChannelUsers = body.max_video_channel_users;
    } else {
      this.maxVideoChannelUsers = null as any;
    }
    if (body.mfa_level) {
      this.mfaLevel = body.mfa_level;
    } else {
      this.mfaLevel = null as any;
    }
    if (body.name) {
      this.name = body.name;
    } else {
      this.name = null as any;
    }
    if (body.nsfw_level) {
      this.nsfwLevel = body.nsfw_level;
    } else {
      this.nsfwLevel = null as any;
    }
    if (body.owner_id) {
      this.ownerId = body.owner_id;
    } else {
      this.ownerId = null as any;
    }
    if (body.permissions) {
      this.permissions = body.permissions;
    } else {
      this.permissions = null as any;
    }
    if (body.preferred_locale) {
      this.preferredLocale = body.preferred_locale;
    } else {
      this.preferredLocale = null as any;
    }
    if (body.premium_progress_bar_enabled) {
      this.premiumProgressBarEnabled = body.premium_progress_bar_enabled;
    } else {
      this.premiumProgressBarEnabled = null as any;
    }
    if (body.premium_subscription_count) {
      this.premiumSubscriptionCount = body.premium_subscription_count;
    } else {
      this.premiumSubscriptionCount = null as any;
    }
    if (body.premium_tier) {
      this.premiumTier = body.premium_tier;
    } else {
      this.premiumTier = null as any;
    }
    if (body.public_updates_channel_id) {
      this.publicUpdatesChannelId = body.public_updates_channel_id;
    } else {
      this.publicUpdatesChannelId = null as any;
    }
    if (body.region) {
      this.region = body.region;
    } else {
      this.region = null as any;
    }
    if (body.roles) {
      this.roles = body.roles;
    } else {
      this.roles = null as any;
    }
    if (body.rules_channel_id) {
      this.rulesChannelId = body.rules_channel_id;
    } else {
      this.rulesChannelId = null as any;
    }
    if (body.splash) {
      this.splash = body.splash;
    } else {
      this.splash = null as any;
    }
    if (body.stickers) {
      this.stickers = body.stickers;
    } else {
      this.stickers = null as any;
    }
    if (body.system_channel_flags) {
      this.systemChannelFlags = body.system_channel_flags;
    } else {
      this.systemChannelFlags = body.system_channel_flags;
    }
    if (body.system_channel_id) {
      this.systemChannelId = body.system_channel_id;
    } else {
      this.systemChannelId = null as any;
    }
    if (body.vanity_url_code) {
      this.vanityUrlCode = body.vanity_url_code;
    } else {
      this.vanityUrlCode = null as any;
    }
    if (body.verification_level) {
      this.verificationLevel = body.verification_level;
    } else {
      this.verificationLevel = null as any;
    }
    if (body.welcome_screen) {
      this.welcomeScreen = body.welcome_screen;
    } else {
      this.welcomeScreen = null as any;
    }
    if (body.widget_channel_id) {
      this.widgetChannelId = body.widget_channel_id;
    } else {
      this.widgetChannelId = null as any;
    }
    if (body.widget_enabled) {
      this.widgetEnabled = body.widget_enabled;
    } else {
      this.widgetEnabled = null as any;
    }
  }
  get onlineMembersCount(){
    return this.presenceCount
  }
  get offlineMembersCount(){
    return this.memberCount - this.presenceCount - 1
  }

   async fetchGuildMembers(options?: fetchGuildMembersOptions){
    const res: IGuildMember[] = await this.bot_cord.rest.listGuildMembers(this.id, !options?.limit? 1000 : options.limit, !options?.after? '0' : options.after)
    return res
  }
  async fetchGuildMember(userId: string, options?: fetchGuildMember){
    const res = await this.fetchGuildMembers({limit: !options?.limit? 1000 : options.limit, after: '0'})
    let member: IGuildMember | undefined = res.find(i => i.user.id === userId)
    if(!member) member = undefined
    return member
  }
}
