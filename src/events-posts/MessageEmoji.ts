import { id, EmojiObject, UserObject, emojiFormats, CDN_URL } from '../constants/';
import { BotCord } from '../client/BotCord';
import { Collection } from '@lowcordjs/collection/dist';
import { GuildRole } from './';
import { CDNRoutes, EmojiFormat } from 'discord-api-types/v10';
export class MessageEmoji {
  private bot_cord: BotCord;
  // Emoji data
  public id: id;
  public name: string;
  public roles: GuildRole[] = [];
  public user: UserObject;
  public requireColons: boolean;
  public managed: boolean;
  public animated: boolean;
  public available: boolean;
  public collection: Collection<string, MessageEmoji>;
  constructor(bot_cord: BotCord) {
    this.bot_cord = bot_cord;
    this.collection = this.bot_cord.emojis;
  }
  async _run(body: EmojiObject, guildId: id) {
    if (body.animated) {
      this.animated = body.animated;
    } else {
      this.animated = null as any;
    }
    if (body.available) {
      this.available = body.available;
    } else {
      this.available = null as any;
    }
    if (body.id) {
      this.id = body.id;
    } else {
      this.id = null as any;
    }
    if (body.managed) {
      this.managed = body.managed;
    } else {
      this.managed = null as any;
    }
    if (body.name) {
      this.name = body.name;
    } else [(this.name = null as any)];
    if (body.require_colons) {
      this.requireColons = body.require_colons;
    } else {
      this.requireColons = null as any;
    }
    if (body.roles) {
      for (const roleId of body.roles) {
        const r = await this.bot_cord.rest.getRole(guildId, roleId);
        const roleClass = new GuildRole(this.bot_cord);
        roleClass._run(r);
        this.roles.push(roleClass);
      }
    } else {
      this.roles = null as any;
    }
    if (body.user) {
      this.user = body.user;
    } else {
      this.user = null as any;
    }
  }
  /**
   * Emoji url
   * @param {emojiFormats} ext
   * @returns string
   */
  getURL(ext?: emojiFormats) {
    const exts = ['png', 'jpeg', 'webp', 'gif'];
    if (ext && exts.includes(ext)) {
      return `${CDN_URL}${CDNRoutes.emoji(this.id, ext as EmojiFormat)}`;
    } else if (ext && !exts.includes(ext)) throw new TypeError(`${ext} is not emoji format`);
    else
      return this.animated
        ? `${CDN_URL}${CDNRoutes.emoji(this.id, 'gif' as any)}`
        : `${CDN_URL}${CDNRoutes.emoji(this.id, 'png' as any)}`;
  }
}
