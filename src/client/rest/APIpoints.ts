/* eslint-disable @typescript-eslint/no-inferrable-types */
import { API_VERSION, APi_URL } from '../../constants/Constants';
import { headers } from '../../constants/Payloads';
import { Axios } from 'axios';
import { id, MessageSendOptions, MessageUpdateOptions } from '../../constants';
import { Routes } from 'discord-api-types/v10';
const axios = new Axios({ baseURL: `${APi_URL}/${API_VERSION}` });
export default class APIRequestOptions {
  private _token: string = '';
  constructor() {
    Object.defineProperty(this, '_token', {
      enumerable: false,
    });
  }

  async getGuild(id: string) {
    const res = await axios
      .get(`${Routes.guild(id)}?with_counts=true`, {
        headers: headers,
      })
      .catch(err => {
        throw new Promise((res, rej) => rej(err));
      });
    return JSON.parse(res.data);
  }
  async getGuildChannels(id: string) {
    const res = await axios
      .get(Routes.guildChannels(id), {
        headers: headers,
      })
      .catch(err => {
        throw new Promise((res, rej) => rej(err));
      });
    return JSON.parse(res.data);
  }
  async sendMessageChannel(channel_id: string, data: MessageSendOptions) {
    const res = await axios
      .post(Routes.channelMessages(channel_id), JSON.stringify(data), {
        headers: headers,
      })
      .catch(err => {
        throw new Promise((res, rej) => rej(err));
      });
    return JSON.parse(res.data);
  }
  async getChannel(channelId: string) {
    const res = await axios
      .get(Routes.channel(channelId), {
        headers: headers,
      })
      .catch(err => {
        throw new Promise((res, rej) => rej(err));
      });
    return JSON.parse(res.data);
  }
  async getChannelMessages(channelId: string) {
    const res = await axios
      .get(Routes.channelMessages(channelId), {
        headers: headers,
      })
      .catch(err => {
        throw new Promise((res, rej) => rej(err));
      });
    return JSON.parse(res.data);
  }
  async getGuildUsers(id: string) {
    const res = await axios
      .get(Routes.guildMembers(id), {
        headers: headers,
      })
      .catch(err => {
        throw new Promise((res, rej) => rej(err));
      });
    return JSON.parse(res.data);
  }
  async getGuildUser(id: string, userId: string) {
    const res = await axios
      .get(Routes.guildMember(id, userId), {
        headers: headers,
      })
      .catch(err => {
        throw new Promise((res, rej) => rej(err));
      });
    return JSON.parse(res.data);
  }
  async listGuildMembers(guildId: string, limit?: number, after?: string) {
    if (!limit) limit = 1;
    if ((limit && limit > 1000) || limit < 1)
      return new Promise((res, rej) => rej(new Error('limit number is invalid')));
    if (!after) after = '0';
    const res = await axios
      .get(`${Routes.guildMembers(guildId)}?limit=${limit}&after=${after}`, {
        headers: headers,
      })
      .catch(err => {
        throw new Promise((res, rej) => rej(err));
      });
    return JSON.parse(res.data);
  }
  async getMessage(guildId: string, channelId: string, messageId: string) {
    const res = await axios
      .get(Routes.channelMessage(channelId, messageId), {
        headers: headers,
      })
      .catch(err => {
        throw new Promise((res, rej) => rej(err));
      });
    return JSON.parse(res.data);
  }
  async editMessage(channelId: id, messageId: id, message: MessageUpdateOptions) {
    const res = await axios
      .patch(Routes.channelMessage(channelId, messageId), JSON.stringify(message), {
        headers: headers,
      })
      .catch(err => {
        throw new Promise((res, rej) => rej(err));
      });
    return JSON.parse(res.data);
  }
  async deleteMessage(channelId: id, messageId: id) {
    await axios
      .delete(Routes.channelMessage(channelId, messageId), {
        headers: headers,
      })
      .catch(err => {
        throw new Promise((res, rej) => rej(err));
      });
    return undefined;
  }
  async bullkDelete(messagesIds: { messages: id[] }, channelId: id) {
    await axios
      .post(Routes.channelBulkDelete(channelId), JSON.stringify(messagesIds), {
        headers: headers,
      })
      .catch(err => {
        throw new Promise((res, rej) => rej(err));
      });
    return undefined;
  }
  set token(token: string) {
    this._token = token;
    headers.Authorization = `Bot ${this._token}`;
  }
}
