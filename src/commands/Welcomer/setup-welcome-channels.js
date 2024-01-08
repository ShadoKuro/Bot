const { SlashCommandBuilder, PermissionFlagsBits, ChannelType } = require('discord.js');
const welcomeChannelSchema = require('../../models/WelcomeChannel');
const { InteractionCollector } = require('discord.js');

const data = new SlashCommandBuilder()
.setName('setup-welcome-channel')
.setDescription('Setup a channel to send welcome message to.')
.setDMPermission(false)
.setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
.addChannelOption((option) => 
    option
        .setName('target-channel')
        .setDescription('The channel to get welcome message in')
        .addChannelOption(ChannelType.GuildText, ChannelType.GuildAnnouncement)
        .setRequired(true)
)
.addStringOption((option) =>
    option
        .setName('custom-message')
        .setDescription('TEMPLATES: {mention-member} {username} {server-name} '
        )

);

async function execute(interaction){
    try {
        const targetChannel = interaction.options.getChannel('target-channel');
        const customMessage = interaction.options.getString('custom-message');

        await interaction.deferReply({ ephemeral: true});

        const query = {
            guildId: interaction.guildId,
            channelId: targetChannel.id,
        };

        const channelExistInDb = await welcomeChannelSchema.exists(query);

        if (channelExistInDb) {
            interaction.followUp('This channel has already been configured for welcome messages.');
        } else {
            // Save the channel to the database and send a success message.
        }
    } catch (error) {
        console.error(error);
        interaction.followUp('An error occurred while trying to set up the welcome channel.');
    }
}

module.exports = {
    data,
    execute,
};