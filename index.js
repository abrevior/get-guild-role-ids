const Discord = require('discord.js');

const client = new Discord.Client();

if (!process.env.BOT_TOKEN) {
  throw new Error('Can\'t find BOT_TOKEN env variable');
}
const token = process.env.BOT_TOKEN;

async function getInfoByGuild(guild) {
  console.log('GUILD :', guild.name);
  const roles = guild.roles;
  roles.map((value, key) => {
    
    console.log('Key:', key, ' Role:', value.name);
  });
  const channels = guild.channels;
  channels.map((value, key) => {
    console.log('Channel-' + key + ' type:', value.type, 'name:', value.name,);
  });
}

async function getInfo(client) {
  client.guilds.map(getInfoByGuild);
}

async function connect(client, token) {
  await client.login(token);
}

async function execute(client, token) {
  await connect(client, token);
  await getInfo(client);
}

execute(client, token);