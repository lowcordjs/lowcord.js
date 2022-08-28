import { INTENTS, BotCord, ACTIVITY_TYPE } from '../index';
import { BOT_TOKEN } from './auth';
const client = new BotCord({
  intents: [INTENTS.ALL],
});

client.on('ready', () => {
    client.provideStatus({
        activities:[{
            name:'a film!',
            type: ACTIVITY_TYPE.CUSTOM,
        }],
        afk: false,
        status:'dnd'
    })
    console.log(`ready as ${client.nameWithTag}`)
});

client.on('messageCreate', async (message) => {
    
})


client.joinWorld(BOT_TOKEN);
