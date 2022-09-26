import { BotCord } from '../../BotCord';
import { Payload } from '../../../constants/Payloads';
import { MessageUpdatePayload } from '../../payload-events-actions/MessageUpdate'
export default async function (bot_cord: BotCord, payload: Payload) {
    await new MessageUpdatePayload(payload, bot_cord)._run()
  }