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
    });
    return JSON.parse(res.data)
  }
  async getGuildChannels(id: string) {
    const res = await axios.get(`/guilds/${id}/channels`, {
      headers: headers,
    });
    return JSON.parse(res.data)
  }
  async sendMessageChannel(channel_id: string, data: MessageSendOptions){
    const res = await axios.post(`/channels/${channel_id}/messages`, JSON.stringify(data), {
      headers: headers
    })
    return res.data
  }
   async getChannel(channelId: string){

    const res = await axios.get(`/channels/${channelId}`, {
      headers: headers,
    })
    return JSON.parse(res.data)
  }
  async getGuildUsers(id: string) {
    const res = await axios.get(`/guilds/${id}/members`, {
      headers: headers,
    });
    return JSON.parse(res.data)
  }
  async getGuildUser(id: string, userId: string) {
    const res = await axios.get(`/guilds/${id}/members/${userId}`, {
      headers: headers,
    });
    return JSON.parse(res.data)
  }

  set token(token: string) {
    this._token = token;
    headers.Authorization = `Bot ${this._token}`;
  }
}
