import { BotCord } from '../../BotCord';
import { Payload } from '../../../constants/Payloads';
import {MessageDeletePayload} from '../../payload-events-actions'
export default async function (bot_cord: BotCord, payload: Payload) {
    await new MessageDeletePayload(payload, bot_cord).run()
  }