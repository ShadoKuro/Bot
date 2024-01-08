require('dotenv').config();
const { IntentsBitField, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle,} = require('discord.js');


      const embed = new EmbedBuilder()
        .setTitle('<a:verifiedv2:1128830681582149683> Verification <a:verifiedv2:1128830681582149683>')
		.setColor('#FFD1D1')
		.setDescription('**Greetings new users!** <a:slugcat_wave:1158871623584202792>  Welcome to **Martha\'s furry box**;\nto gain access to the server you must verify.\n\n**Click the button below to start the verification**. The verification will require you to fill this form;\n› Insert your name or nickname:\n› Insert your age and date of birthday:\n› Insert your pronouns:\n› Tell us a bit about yourself:\n› Explain, with your own words, one of the rules of the server of your choice:\n\nIf the bot is offline or if you don\'t trust it enough, please sent the exact form in the channel <#1009123062546972772>.\nPlease be sure to read <#1009123577435537408> before trying to verify.');
      
      const row = new ActionRowBuilder()
      .addComponents(
      new ButtonBuilder()
      .setCustomId('Startvrf 1')
      .setLabel('Start Verification 1')
      .setStyle(ButtonStyle.Success)
      )
      .addComponents(
        new ButtonBuilder()
        .setCustomId('Startvrf 2')
        .setLabel('Start Verification 2')
        .setStyle(ButtonStyle.Success)
      )



module.exports = {
    name: 'verification-ticket',
    description: 'Send the verification ticket',
     devOnly: true,
     testOnly: true,
    // options: Object[],
    // deleted: Boolean,
  
    
    
    
    callback: (client, interaction) => {
        interaction.reply({ embeds: [embed,], components: [row]});
    }
  };