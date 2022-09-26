import { BotCord } from '../../BotCord';
import { Payload } from '../../../constants/Payloads';
import { MessageDeleteBulkPayload } from '../../payload-events-actions'
export default async function (bot_cord: BotCord, payload: Payload) {
  await new MessageDeleteBulkPayload(payload, bot_cord)._run()
}
