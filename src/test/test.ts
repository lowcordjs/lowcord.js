import { INTENTS, BotCord, ACTIVITY_TYPE, EmbedObject } from '../index';
import { BOT_TOKEN } from './auth';
const client = new BotCord({
  intents: [INTENTS.ALL],
});

client.on('ready', () => {
    client.provideStatus({
        activities:[{
            name:'a game!',
            type: ACTIVITY_TYPE.PLAYING,
        }],
        afk: false,
        status:'online'
    })
    console.log(`ready as ${client.nameWithTag}`)
});

client.on('messageCreate', async (message) => {
    if(message.content === 'ping'){
        const res = await message.guild.fetchGuildMember(message.author.id)
       console.log(res?.user)
        message.replyToMessage({content:'pong!'})
    }else if(message.content === 'count'){
        const embed: EmbedObject = {
            fields:[
                {name: '**online members**', value: `**${message.guild.onlineMembersCount}**`},
                {name: '**offline members**', value: `**${message.guild.offlineMembersCount}**`},
            ]
        }
        message.replyToMessage({embeds:[embed]})
    }
})


client.joinWorld(BOT_TOKEN);
