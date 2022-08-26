/* eslint-disable @typescript-eslint/no-unused-vars */
import { BotCord } from '../../BotCord';
import { Payload } from '../../../constants/Payloads';
import { ClientInfo } from '../../../constants/Constants';
import { Events } from '../../../constants/Events';
import IGuildStructure from '../../rest/interfaces/IGuildStructure';

export default async function (bot_cord: BotCord, payload: Payload) {
  const payloadUser: ClientInfo = payload.d.user;
  let gData!: IGuildStructure;
  payload.d.guilds.map(async (server: any) => {
    gData = await bot_cord.rest.getGuild(server.id);
  });

  bot_cord.info = {
    avatarCode: payload.d.user.avatar,
    avatarUrl: `https://cdn.discordapp.com/avatars/${payloadUser.id}/${payload.d.user.avatar}`,
    bot: payloadUser.bot,
    discriminator: payloadUser.discriminator,
    flags: payloadUser.flags,
    guilds: null as any,
    // guilds: {
    //   roles: gData.roles,
    //   emojis: gData.emojis,
    //   features: gData.features,
    //   stickers: gData.stickers,
    // },
    id: payloadUser.id,
    mfa_enabled: payloadUser.mfa_enabled,
    nameWithTag: `${payloadUser.username}#${payloadUser.discriminator}`,
    username: payloadUser.username,
    verified: payloadUser.verified,
  };
  //   bot_cord.info.verified = payloadUser.verified;

  /**
   * When client is ready.
   * @event bot_cord#ready
   */
  bot_cord.emit(Events.READY);
}
