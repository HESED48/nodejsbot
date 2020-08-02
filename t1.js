const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NzM2OTQyOTk5MTk5ODA5NTQ2.Xx2Jpg.sRrR_8tdQ0OwSCeLA6X3skXtPV0";

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);