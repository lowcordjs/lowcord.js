import { Payload, id, EmojiObject } from '../../../constants';
import { BotCord } from '../../BotCord';
import { MessageEmoji } from '../../../events-posts/';
export class EmojiCache {
  constructor(private bot_cord: BotCord, private payload: Payload, private eventName: any) {
    this.bot_cord = bot_cord;
    this.payload = payload;
  }
  async _run() {
    if (this.eventName == 'GUILD_CREATE') {
      const guildId: id = this.payload.d.id;
      const emojis: EmojiObject[] = this.payload.d.emojis;
      for (const emoji of emojis) {
        const checkE = this.bot_cord.emojis.get(emoji.id as any);
        if (!checkE) {
          const emojiClass = new MessageEmoji(this.bot_cord);
          await emojiClass._run(emoji, guildId);
          this.bot_cord.emojis.set(emojiClass.id, emojiClass);
        }
      }
    }
  }
}
