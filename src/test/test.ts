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
        status:'online'
    })
    console.log(`ready as ${client.nameWithTag}`)
});

client.on('messageCreate', async (message) => {
    if(message.content === 'ping'){
        message.replyToMessage({content:'pong!'})
    }else if(message.content === 'count'){
        message.replyToMessage({content: `**${message.guild.name} has ${message.guild.memberCount} members**`})
    }
})


client.joinWorld(BOT_TOKEN);
