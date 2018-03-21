const Discord = require('discord.js');

const client = new Discord.Client();

if (!process.env.BOT_TOKEN) {
  throw new Error('Can\'t find BOT_TOKEN env variable');
}
const token = process.env.BOT_TOKEN;

async function connect() {
  await client.login(token);
  
  const roles =  client.guilds.first().roles;
  roles.map((value,key) => {
    console.log('Key:', key, ' Role:', value.name);
  });

  const channels = client.guilds.first().channels;

  channels.map((value, key) => {
    console.log('Channel-' + key + ' type:', value.type, 'name:', value.name);
  })

}
connect();