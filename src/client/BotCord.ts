/* eslint-disable @typescript-eslint/no-inferrable-types */
import * as EventEmitter from 'events';
import { WebSocketManager } from './ws/WebSocketManager';
import { BotCordOptions, ClientInfo, IprovideStatus, OPCODE } from '../constants/Constants';
import RESThandler from './rest/APIpoints';
import { Guild, Message, GuildTextChannel, GuildRole, MessageEmoji } from '../';
import { Collection } from '@lowcordjs/collection';

export interface ClientEvents {
  ready: () => void;
  messageCreate: (message: Message) => void;
  messageDelete: (message: Message) => void;
  guildCreate: (guild: Guild) => void;
  messageUpdate: (oldMessage: Message, newMessage: Message) => void;
  messageDeleteBulk: (message: Message) => void;
}

export declare interface BotCord {
  rest: RESThandler;
  on<Event extends keyof ClientEvents>(event: Event, listener: ClientEvents[Event]): this;
  off<Event extends keyof ClientEvents>(event: Event, listener: ClientEvents[Event]): this;
  emit<Event extends keyof ClientEvents>(event: Event, ...args: Parameters<ClientEvents[Event]>): boolean;
  joinWorld(token: string): Promise<void>;
}

export class BotCord extends EventEmitter {
  private _info!: ClientInfo;
  private socket = new WebSocketManager(this);
  public rest!: RESThandler;
  public messages: Collection<string, Message> = new Collection();
  public channels: Collection<string, GuildTextChannel> = new Collection();
  public guilds: Collection<string, Guild> = new Collection();
  public roles: Collection<string, GuildRole> = new Collection();
  public emojis: Collection<string, MessageEmoji> = new Collection();
  constructor(private options: BotCordOptions) {
    super();

    this.options = options;

    this.rest = new RESThandler();
  }
  async joinWorld(token: string) {
    this.rest.token = token;
    this.socket.connectClient(token, this.options.intents);
  }
  get pictureUrl() {
    return this._info.avatarUrl;
  }
  get username() {
    return this._info.username;
  }
  get pictureCode() {
    return this._info.avatarCode;
  }
  get bot() {
    return this._info.bot;
  }
  get tagNumber() {
    return this._info.discriminator;
  }
  get flags() {
    return this._info.flags;
  }
  get id() {
    return this._info.id;
  }
  get mfaEnabled() {
    return this._info.mfa_enabled;
  }
  get nameWithTag() {
    return this._info.nameWithTag;
  }
  get verified() {
    return this._info.verified;
  }
  provideStatus(options: IprovideStatus) {
    options.since = null;
    this.socket.sendSocket(
      JSON.stringify({
        op: OPCODE.THREE,
        d: options,
      }),
    );
  }
  set info(info: ClientInfo) {
    this._info = {
      avatarCode: info.avatarCode,
      avatarUrl: info.avatarUrl,
      bot: info.bot,
      discriminator: info.discriminator,
      flags: info.flags,
      guilds: null as any,
      id: info.id,
      mfa_enabled: info.mfa_enabled,
      nameWithTag: `${info.username}#${info.discriminator}`,
      username: info.username,
      verified: info.verified,
    };
  }
}
