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
  MessageSendOptions,
  MessageUpdateOptions,
  channelTypes,
} from '../constants/';
import MemberPartial from '../client/rest/interfaces/IGuildMember';
import { BotCord } from '../client/BotCord';
import { GuildTextChannel, Guild } from './';
import { Collection } from '@lowcordjs/collection/dist';
import { MessageSetup } from '../setups';

export class Message {
  private bot_cord: BotCord;
  // message data
  public id: string;
  public channelId: string;
  public channel: GuildTextChannel;
  public guild: Guild;
  public author: UserObject;
  public content: string;
  public timestamp: string;
  public editedTimestamp: string;
  public tts: boolean;
  public mentionEveryone: boolean;
  public mentions: MessageMentionsMember[];
  public mentionRoles: RoleObject[];
  public mentionChannels: ChannelMentionObject[];
  public attachments: AttachmentObject[];
  public embeds: EmbedObject[];
  public reactions: ReactionObject[];
  public nonce: number | string;
  public pinned: boolean;
  public webhookId: string;
  public type: number;
  public member: MemberPartial;
  public activity: MessageActivityStructure;
  public application: ApplicationObject;
  public applicationId: string;
  public messageReference: MessageRefrenceStructure;
  public flags: number;
  public referencedMessage: MessageObject;
  public interaction: MessageInteractionObject;
  public thread: ChannelObject;
  public components: MessageComponentDataStructure[];
  public stickerItems: StickerItem[];
  public stickers: Sticker[];
  public position: number;
  public guildId: string;
  public collection: Collection<string, Message>;
  constructor(bot_cord: BotCord) {
    this.bot_cord = bot_cord;
    this.collection = bot_cord.messages;
  }
  _run(body: MessageObject) {
    if (body.activity) {
      this.activity = body.activity;
    } else {
      this.activity = null as any;
    }

    if (body.application) {
      this.application = body.application;
    } else {
      this.application ??= null as any;
    }

    if (body.application_id) {
      this.applicationId = body.application_id;
    } else {
      this.applicationId = null as any;
    }

    if (body.attachments) {
      this.attachments = body.attachments;
    } else {
      this.attachments = null as any;
    }

    if (body.author) {
      this.author = body.author;
    } else {
      this.author = null as any;
    }

    if (body.channel) {
      this.channel = body.channel as any;
    } else {
      this.channel = null as any;
    }

    if (body.channel_id) {
      this.channelId = body.channel_id;
    } else {
      this.channelId = null as any;
    }

    if (body.components) {
      this.components = body.components;
    } else {
      this.components = null as any;
    }

    if (body.content) {
      this.content = body.content;
    } else {
      this.content = null as any;
    }

    if (body.edited_timestamp) {
      this.editedTimestamp = body.edited_timestamp;
    } else {
      this.editedTimestamp = null as any;
    }

    if (body.embeds) {
      this.embeds = body.embeds;
    } else {
      this.embeds = null as any;
    }

    if (body.flags) {
      this.flags = body.flags;
    } else {
      this.flags = null as any;
    }

    if (body.guild) {
      this.guild = body.guild as any;
    } else {
      this.guild = null as any;
    }

    if (body.guild_id) {
      this.guildId = body.guild_id;
    } else {
      this.guildId = null as any;
    }

    if (body.id) {
      this.id = body.id;
    } else {
      this.id = null as any;
    }

    if (body.interaction) {
      this.interaction = body.interaction;
    } else {
      this.interaction = null as any;
    }

    if (body.member) {
      this.member = body.member;
    } else {
      this.member = null as any;
    }

    if (body.mention_channels) {
      this.mentionChannels = body.mention_channels;
    } else {
      this.mentionChannels = null as any;
    }

    if (body.mention_everyone) {
      this.mentionEveryone = body.mention_everyone;
    } else {
      this.mentionEveryone = null as any;
    }

    if (body.mention_roles) {
      this.mentionRoles = body.mention_roles;
    } else {
      this.mentionRoles = null as any;
    }

    if (body.mentions) {
      this.mentions = body.mentions;
    } else {
      this.mentions = null as any;
    }

    if (body.message_reference) {
      this.messageReference = body.message_reference;
    } else {
      this.messageReference = null as any;
    }

    if (body.nonce) {
      this.nonce = body.nonce;
    } else {
      this.nonce = null as any;
    }

    if (body.pinned) {
      this.pinned = body.pinned;
    } else {
      this.pinned = null as any;
    }

    if (body.position) {
      this.position = body.position;
    } else {
      this.position = null as any;
    }

    if (body.reactions) {
      this.reactions = body.reactions;
    } else {
      this.reactions = null as any;
    }

    if (body.referenced_message) {
      this.referencedMessage = body.referenced_message;
    } else {
      this.referencedMessage = null as any;
    }

    if (body.sticker_items) {
      this.stickerItems = body.sticker_items;
    } else {
      this.stickerItems = null as any;
    }

    if (body.stickers) {
      this.stickers = body.stickers;
    } else {
      this.stickers = null as any;
    }

    if (body.thread) {
      this.thread = body.thread;
    } else {
      this.thread = null as any;
    }

    if (body.timestamp) {
      this.timestamp = body.timestamp;
    } else {
      this.timestamp = null as any;
    }

    if (body.tts) {
      this.tts = body.tts;
    } else {
      this.tts = null as any;
    }

    if (body.type) {
      this.type = body.type;
    } else {
      this.type = null as any;
    }

    if (body.webhook_id) {
      this.webhookId = body.webhook_id;
    } else {
      this.webhookId = null as any;
    }
  }
  async replyToMessage(options: MessageSendOptions): Promise<Message | undefined> {
    if (this.channel.type !== channelTypes.GUILD_TEXT) return;
    if ('message_reference' in options) {
      const msg: MessageObject = await this.bot_cord.rest.sendMessageChannel(
        this.channel.id as string,
        options as MessageSendOptions,
      );
      const msgRes = await new MessageSetup(this.bot_cord, msg);
      await msgRes._run();
      const res = new Message(this.bot_cord);
      res._run(msgRes.message);
      return res;
    } else {
      const msg: MessageObject = await this.bot_cord.rest.sendMessageChannel(this.channel.id as string, {
        ...options,
        message_reference: { channel_id: this.channel.id, message_id: this.id },
      });
      const msgRes = await new MessageSetup(this.bot_cord, msg);
      await msgRes._run();
      const res = new Message(this.bot_cord);
      res._run(msgRes.message);
      return res;
    }
  }

  async updateMessage(options: MessageUpdateOptions | string) {
    if (this.channel.type !== channelTypes.GUILD_TEXT) return;
    if (typeof options == 'string') {
      const msg: MessageObject = await this.bot_cord.rest.editMessage(this.channel.id as string, this.id, {
        content: options,
      });
      const msgRes = await new MessageSetup(this.bot_cord, msg);
      await msgRes._run();
      const res = new Message(this.bot_cord);
      res._run(msgRes.message);
      return res;
    } else {
      const msg: MessageObject = await this.bot_cord.rest.editMessage(this.channel.id, this.id, options);
      const msgRes = await new MessageSetup(this.bot_cord, msg);
      await msgRes._run();
      const res = new Message(this.bot_cord);
      res._run(msgRes.message);
    }
  }
  async deleteMessage() {
    await this.channel.deleteMessage(this.id);
  }
}
