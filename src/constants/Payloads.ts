export const Heartbeat = {
  op: 1,
  d: null,
};

export const Identify = {
  op: 2,
  d: {
    token: '',
    intents: 3243773,
    properties: {
      $os: 'linux',
      $browser: 'lowcordjs',
      $device: 'lowcordjs',
    },
  },
};

export const headers = {
  'Content-Type': 'application/json',
  Authorization: '',
};

export interface Payload {
  op: number;
  s: number;
  t: string;
  d: any;
}

export const GATEWAY = 'wss://gateway.discord.gg/?v=10&encoding=json';
