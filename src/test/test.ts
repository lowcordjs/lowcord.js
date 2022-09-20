import { INTENTS, BotCord, ACTIVITY_TYPE, EmbedObject } from '../index';
import { BOT_TOKEN } from './auth';
import { Collection } from '@lowcordjs/collection';
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
    const res = await message.guild.fetchGuildMember(message.author.id);
    console.log(res?.user);
    message.replyToMessage({ content: 'pong!' });
  } else if (message.content === 'count') {
    const embed: EmbedObject = {
      fields: [
        { name: '**online members**', value: `**${message.guild.onlineMembersCount}**` },
        { name: '**offline members**', value: `**${message.guild.offlineMembersCount}**` },
      ],
    };
    message.channel.collection.get('1021839070118281266')?.sendMessage({ content: 'hello world' });
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
client.on('messageDelete', msg => {
  console.log(msg.content);
});

client.joinWorld(BOT_TOKEN);
