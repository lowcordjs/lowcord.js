/* eslint-disable @typescript-eslint/no-inferrable-types */
import { API_VERSION, APi_URL } from '../../constants/Constants';
import { headers } from '../../constants/Payloads';
import { Axios } from 'axios';
import {MessageSendOptions} from '../../constants'
const axios = new Axios({ baseURL: `${APi_URL}/${API_VERSION}` });
export default class APIRequestOptions {
  private _token: string = '';
  constructor() {
    Object.defineProperty(this, '_token', {
      enumerable: false,
    });
  }

  async getGuild(id: string) {
    const res = await axios.get(`/guilds/${id}?with_counts=true`, {
      headers: headers,
    }).catch(err =>{ throw new Promise((res, rej) => rej(err))})
    return JSON.parse(res.data)
  }
  async getGuildChannels(id: string) {
    const res = await axios.get(`/guilds/${id}/channels`, {
      headers: headers,
    }).catch(err =>{ throw new Promise((res, rej) => rej(err))})
    return JSON.parse(res.data)
  }
  async sendMessageChannel(channel_id: string, data: MessageSendOptions){
    const res = await axios.post(`/channels/${channel_id}/messages`, JSON.stringify(data), {
      headers: headers,
      
    }).catch(err =>{ throw new Promise((res, rej) => rej(err))})
    return JSON.parse(res.data)
    
  }
   async getChannel(channelId: string){

    const res = await axios.get(`/channels/${channelId}`, {
      headers: headers,
    }).catch(err =>{ throw new Promise((res, rej) => rej(err))})
    return JSON.parse(res.data)
  }
  async getChannelMessages(channelId: string){
    const res = await axios.get(`/channels/${channelId}/messages`, {
      headers: headers,
    }).catch(err =>{ throw new Promise((res, rej) => rej(err))})
    return JSON.parse(res.data)
  }
  async getGuildUsers(id: string) {
    const res = await axios.get(`/guilds/${id}/members`, {
      headers: headers,
    }).catch(err =>{ throw new Promise((res, rej) => rej(err))})
    return JSON.parse(res.data)
  }
  async getGuildUser(id: string, userId: string) {
    const res = await axios.get(`/guilds/${id}/members/${userId}`, {
      headers: headers,
    }).catch(err =>{ throw new Promise((res, rej) => rej(err))})
    return JSON.parse(res.data)
  }
  async listGuildMembers(guildId: string, limit?: number, after?: string){
    if(!limit) limit = 1
    if(limit && limit > 1000 || limit < 1) return new Promise((res, rej) => rej(new Error('limit number is invalid')))
    if(!after) after = '0'
    const res = await axios.get(`/guilds/${guildId}/members?limit=${limit}&after=${after}`, {
      headers: headers,
    }).catch(err =>{ throw new Promise((res, rej) => rej(err))})
    return JSON.parse(res.data)
  }
  async getMessage(guildId: string, channelId: string, messageId: string){
    const res = await axios.get(`/channels/${guildId}/${channelId}/${messageId}`, {
      headers: headers,
    }).catch(err =>{ throw new Promise((res, rej) => rej(err))})
    return JSON.parse(res.data)
  }

  set token(token: string) {
    this._token = token;
    headers.Authorization = `Bot ${this._token}`;
  }
}
