import { INTENTS, BotCord } from '../index';

const t = new BotCord({
  intents: [INTENTS.DIRECT_MESSAGES],
});

t.joinWorld('bot-token');
