import { INTENTS, BotCord, ACTIVITY_TYPE, EmbedObject } from '../index';
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
    console.log('s')
     await message.channel.bulkDelete({count: 10}).catch(err => console.log(err))
  } 
});

client.on('messageUpdate', (oldMessage, newMessage) => {
  console.log(`new message: ${newMessage.content}, old message: ${oldMessage.content}`);
  const embed: EmbedObject = {
    fields: [
      {
        name: '**oldMessage**',
        value: oldMessage.content,
      },
      {
        name: '**newMessage**',
        value: newMessage.content,
      },
    ],
  };
  oldMessage.replyToMessage({ embeds: [embed] });
});
client.on('messageDeleteBulk', (message) => {
  console.log(message.content)
})

client.joinWorld(BOT_TOKEN);
