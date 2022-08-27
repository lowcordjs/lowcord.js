import { INTENTS, BotCord, ACTIVITY_TYPE } from '../index';
import { BOT_TOKEN } from './auth';
const client = new BotCord({
  intents: [INTENTS.MESSAGE_CONTENT, INTENTS.GUILDS, INTENTS.GUILD_MESSAGES, INTENTS.GUILD_MEMBERS],
});

client.on('ready', () => {
    client.provideStatus({
        activities:[{
            name:'a film!',
            type: ACTIVITY_TYPE.COMPETING,
        }],
        afk: false,
        status:'dnd'
    })
    console.log(`ready as ${client.nameWithTag}`)
});

client.on('messageCreate', async (message) => {
    console.log(message.guild?.iconUrl)
})


client.joinWorld(BOT_TOKEN);
