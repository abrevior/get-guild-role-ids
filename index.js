const Discord = require('discord.js');

const client = new Discord.Client();

if (!process.env.BOT_TOKEN) {
  throw new Error('Can\'t find BOT_TOKEN env variable');
}
const token = process.env.BOT_TOKEN;

async function getInfo(client) {
  const roles = client.guilds.first().roles;
  roles.map((value, key) => {
    console.log('Key:', key, ' Role:', value.name);
  });
  const channels = client.guilds.first().channels;
  channels.map((value, key) => {
    console.log('Channel-' + key + ' type:', value.type, 'name:', value.name);
  });
}

async function connect(client, token) {
  await client.login(token);
  await getInfo();
}

async function execute(client, token) {
  await connect(client, token);
  await getInfo(client);
}

execute(client, token);