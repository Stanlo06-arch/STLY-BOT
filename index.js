require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildVoiceStates
]
});

require('./commands/willkommen')(client);

client.once('ready', () => {
  console.log(`${client.user.tag} ist online!`);
});

client.login(process.env.TOKEN);
