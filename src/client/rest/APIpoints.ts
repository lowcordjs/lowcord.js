/* eslint-disable @typescript-eslint/no-inferrable-types */
import { API_VERSION, APi_URL } from '../../constants/Constants';
import { headers } from '../../constants/Payloads';
import { BotCord } from '../BotCord';
import { Axios } from 'axios';

const axios = new Axios({ baseURL: `${APi_URL}/${API_VERSION}` });
export default class APIRequestOptions {
  private _token: string = '';
  constructor(private client: BotCord) {
    Object.defineProperty(this, '_token', {
      enumerable: false,
    });
  }

  async getGuild(id: string) {
    const res = await axios.get(`/guilds/${id}`, {
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
