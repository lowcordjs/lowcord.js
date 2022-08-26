import { INTENTS, BotCord, ACTIVITY_TYPE } from '../index';
import { BOT_TOKEN } from './auth';
const bot = new BotCord({
  intents: [INTENTS.MESSAGE_CONTENT, INTENTS.GUILDS, INTENTS.GUILD_MESSAGES, INTENTS.GUILD_MEMBERS],
});

bot.on('ready', () => {
    bot.provideStatus({
        activities:[{
            name:'a film!',
            type: ACTIVITY_TYPE.WATCHING,
        }],
        afk: false,
        status:'dnd'
    })
    console.log(`ready as ${bot.nameWithTag}`)
})



bot.joinWorld(BOT_TOKEN);
