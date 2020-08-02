const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NzM2OTQyOTk5MTk5ODA5NTQ2.Xx2Jpg.RUm0x-aGBCjp3TQ0YWxKRqrIMso";

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);