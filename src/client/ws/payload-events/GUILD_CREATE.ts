import { BotCord } from '../../BotCord';
import { Payload } from '../../../constants/Payloads';
import {GuildCreatePayload} from '../../payload-events-actions'
export default async function (bot_cord: BotCord, payload: Payload) {
    await new GuildCreatePayload(payload, bot_cord)._run()
  }