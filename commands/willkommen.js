const { Events, EmbedBuilder } = require('discord.js');

module.exports = {
    name: Events.GuildMemberAdd,

    async execute(member) {

        const channel = member.guild.channels.cache.get('1376309224962789466');

        if (!channel) return;

        const embed = new EmbedBuilder()
            .setColor('#87CEEB')
            .setTitle('🎮 Willkommen im Gaming Bunker! 🎮')
            .setDescription(
                `Moin ${member},

schön, dass du dich in den Gaming Bunker zurückgezogen hast! 🔥

Hier findest du eine starke Community, entspannte Gespräche, Gaming-Sessions und jede Menge Spaß. Egal ob du Mitspieler suchst, neue Leute kennenlernen möchtest oder einfach nur abschalten willst – hier bist du genau richtig.

📜 Schau dir unsere Regeln an.
🎮 Entdecke unsere Gaming-Bereiche.
💬 Tausche dich mit der Community aus.
🚀 Hab eine großartige Zeit bei uns!

Willkommen im Bunker und viel Spaß auf dem Server!`
            )
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setFooter({
                text: 'Hosted by 𝔖𝔱𝔞𝔫𝔩𝔢𝔶_𝔯𝔪𝔭.06 ♕'
            })
            .setTimestamp();

        channel.send({
            content: `${member}`,
            embeds: [embed]
        });
    }
};
