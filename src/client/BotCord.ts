/* eslint-disable @typescript-eslint/no-inferrable-types */
import EventEmitter from 'events';
import { WebSocketManager } from './ws/WebSocketManager';
import { BotCordOptions, ClientInfo } from '../constants/Constants';
import RESThandler from './rest/APIpoints'


interface ClientEvents {
    ready: () => void;
  }

export declare interface BotCord {
    rest: RESThandler,

    on<Event extends keyof ClientEvents>(
        event: Event,
        listener: ClientEvents[Event]
    ): this
    off<Event extends keyof ClientEvents>(
        event: Event,
        listener: ClientEvents[Event]
    ): this,
    emit<Event extends keyof ClientEvents>(
        event: Event,
        ...args: Parameters<ClientEvents[Event]>
    ): boolean,
    joinWorld(token: string): Promise<void>
}


export class BotCord extends EventEmitter {
    private _info!: ClientInfo
  private socket = new WebSocketManager(this);
  public rest!: RESThandler
  constructor(private options: BotCordOptions) {
    super();

    // this.info.avatarUrl = null;

    // this.info.avatarCode = null

    // this.info.bot = null;

    // this.info.discriminator = null;

    // this.info.nameWithTag = null

    // this.info.flags = null;

    // // this.info.guilds = null;

    // this.info.id = null;

    // this.info.mfa_enabled = null;

    // this.info.username = null;

    // this.info.verified = null;
    
    this.options = options;

    this.rest = new RESThandler(this)
  }
  async joinWorld(token: string) {
    this.rest.token = token
    this.socket.connectClient(token, this.options.intents);
  }
  get pictureUrl() {
    return this._info.avatarUrl
  }
  get username() {
    return this._info.username
  }
  get pictureCode() {
    return this._info.avatarCode
  }
  get bot() {
    return this._info.bot
  }
  get tagNumber() {
    return this._info.discriminator
  }
  get flags(){
    return this._info.flags
  }
  get id(){
    return this._info.id
  }
  get mfaEnabled() {
    return this._info.mfa_enabled
  }
  get nameWithTag() {
    return this._info.nameWithTag
  }
  get verified() {
    return this._info.verified
  }
  set info(info: ClientInfo){
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
      }
  }
}