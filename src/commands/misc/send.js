require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType, IntentsBitField, EmbedBuilder, } = require('discord.js');



        


module.exports = {
    name: 'send',
    description: 'Send a dm to an user',
    // devOnly: Boolean,
    testOnly: true,
       options: [
            {
                name: 'user',
                description: 'the user u want to send a dm',
                type: ApplicationCommandOptionType.User,
                required: true,
            },
            {
                name: 'dm',
                description: 'the message want to send',
                type: ApplicationCommandOptionType.String,
                required: true
            },
     
],
    //deleted: boolean,
  
    callback: async (client, interaction) => {
        const user = interaction.options.getUser('user');
        const message = interaction.options.getString('dm');
        const embed = new EmbedBuilder()
      .setTitle('The message u sent:')
      .setDescription(` ${message} `)
      .setColor('#FFD1D1')
      .setFooter({
        text: `to the user ${user}`,
      })
      .setTimestamp()
    
        try {
            await user.send(message);
            await interaction.user.send({ embeds: [embed] });
            await interaction.reply({ content: `The message to ${user.username} has been sent`, ephemeral: true });
        } catch (error) {
            console.error(`Error sending message to ${user.username}: ${error.message}`);
            await interaction.reply({ content: `Failed to send message to ${user.username}`, ephemeral: true });
        }
    },
    
  };