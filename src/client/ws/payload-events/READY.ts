import { BotCord } from '../../BotCord';
import { Payload } from '../../../constants/Payloads';
import { ClientInfo } from '../../../constants/Constants';
import { Events } from '../../../constants/Events'


export default async function (bot_cord: BotCord, payload: Payload) {
  const payloadUser: ClientInfo = payload.d.user;
//    bot_cord.info.avatarCode = payload.d.user.avatar;
  bot_cord.info = {
    avatarCode: payload.d.user.avatar,
    avatarUrl: `https://cdn.discordapp.com/avatars/${payloadUser.id}/${payload.d.user.avatar}`,
    bot: payloadUser.bot,
    discriminator: payloadUser.discriminator,
    flags: payloadUser.flags,
    guilds: null as any,
    id: payloadUser.id,
    mfa_enabled: payloadUser.mfa_enabled,
    nameWithTag: `${payloadUser.username}#${payloadUser.discriminator}`,
    username: payloadUser.username,
    verified: payloadUser.verified,
  }
//   bot_cord.info.verified = payloadUser.verified;

//   payload.d.guilds.map(async (server: any) => {
//     const gdata = await bot_cord.rest.getGuild(server.id)
//     console.log({gdata})

//   })
  bot_cord.emit(Events.READY)
}
