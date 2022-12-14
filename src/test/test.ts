import { INTENTS, BotCord, ACTIVITY_TYPE } from '../index';
import { BOT_TOKEN } from './auth';
const client = new BotCord({
  intents: [INTENTS.ALL],
});

client.on('ready', () => {
  client.provideStatus({
    activities: [
      {
        name: 'a game!',
        type: ACTIVITY_TYPE.PLAYING,
      },
    ],
    afk: false,
    status: 'online',
  });
  console.log(`ready as ${client.nameWithTag}`);
  client.guilds.map(s => {
    console.log(s);
  });
});

client.on('messageCreate', async message => {
  if (message.content === 'ping') {
     message.guild.emojis.map(s => {
      message.channel.sendMessage(s.getURL())
     })
  } 
});
client.on('messageDeleteBulk', (message) => {
  console.log(message.content)
})

client.joinWorld(BOT_TOKEN);
