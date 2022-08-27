import { BotCord } from '../../BotCord';
import { Payload } from '../../../constants/Payloads';
import {MessageCreatePayload} from '../../payload-events-actions'

export default async function (bot_cord: BotCord, payload: Payload) {
 await new MessageCreatePayload(payload, bot_cord).run() as any
}
