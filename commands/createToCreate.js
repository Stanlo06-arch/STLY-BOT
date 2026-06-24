const { ChannelType } = require('discord.js');

module.exports = (client) => {

const CREATE_CHANNEL_ID = '1513520007621906613';
const CATEGORY_ID = '1376321855215894531';

client.on('voiceStateUpdate', async (oldState, newState) => {

```
// Nutzer betritt Create-to-Create
if (newState.channelId === CREATE_CHANNEL_ID) {

  const channel = await newState.guild.channels.create({
    name: `${newState.member.user.username}'s Channel`,
    type: ChannelType.GuildVoice,
    parent: CATEGORY_ID
  });

  await newState.member.voice.setChannel(channel);
}

// Leere temporäre Kanäle löschen
if (
  oldState.channel &&
  oldState.channel.parentId === CATEGORY_ID &&
  oldState.channel.id !== CREATE_CHANNEL_ID &&
  oldState.channel.members.size === 0
) {
  await oldState.channel.delete().catch(() => {});
}
```

});

};
