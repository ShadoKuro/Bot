require('dotenv').config();
const { IntentsBitField, EmbedBuilder } = require('discord.js');


      const embed1 = new EmbedBuilder()
      .setTitle('<a:pink_ribbon:1129402243662233670> • Our permanent Server invite here:')
      .setDescription('https://discord.gg/marthasfurrybox <a:pink_sparkles2:1129402249903349871>')
      .setColor('#FFD1D1')
      .setImage('https://images-ext-2.discordapp.net/external/3hznWfZfc0vhecIVlXdexf2OQHNGyWJ8G-_QWxrGMvM/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlYTU4YWJhLWU3NTUtNGIxMy1hMTFhLWQ5OTIxMmY2OTJmY1wvZGZtc3dmZy1lMTQ2NzViYS00NjhkLTQwOTEtOGY4Ny04N2IyNjM0ZmZiNzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.edZJS7b1XGHLx9t9mtT8mDSeY-AkNNs1hzbzeZPuexM/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aea58aba-e755-4b13-a11a-d99212f692fc/dfmswfg-e14675ba-468d-4091-8f87-87b2634ffb79.png');
      



module.exports = {
    name: 'server-invite',
    description: 'Send the permanent server invite',
    // devOnly: Boolean,
    testOnly: true,
    // options: Object[],
    // deleted: Boolean,
  
    
    
    
    callback: (client, interaction) => {
        interaction.reply({ embeds: [embed1] });
    }
  };





