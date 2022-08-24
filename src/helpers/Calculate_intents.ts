export function calcIntnet(intents: number[]) {
  let res = 0;
  for (let i = 0; i < (intents.length as any); i++) {
   res = res | intents[i];
  }
  return res;
}
