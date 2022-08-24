import { INTENTS, BotCord } from '../index';
import { BOT_TOKEN } from './auth';
const bot = new BotCord({
  intents: [INTENTS.ALL],
});

bot.on('ready', () => {
    console.log(`ready as ${bot.nameWithTag}`)
})

bot.joinWorld(BOT_TOKEN);
