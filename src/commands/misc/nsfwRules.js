require('dotenv').config();
const { IntentsBitField, EmbedBuilder } = require('discord.js');


      const embed1 = new EmbedBuilder()
      .setTitle('<:number_one:1064269439257813002> <a:pink_ribbon:1129402243662233670> • ID Verification System;')
      .setDescription('✦ • ······················ • ✦ • ······················ • ✦\nTo access the NSFW side of the server, you must have the role <@&1077737954535022632>. To obtain it, you need to contact an admin and show them a picture of your ID card. It needs to show only the DOB. Everything else can be censored, remember to put a piece of paper with your discord Nick and Tag near the ID card. We want to be sure there are no minors there! <:pink_heart:980840966674055168>')
      .setColor('#FFD1D1')
      .setImage('https://images-ext-2.discordapp.net/external/3hznWfZfc0vhecIVlXdexf2OQHNGyWJ8G-_QWxrGMvM/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlYTU4YWJhLWU3NTUtNGIxMy1hMTFhLWQ5OTIxMmY2OTJmY1wvZGZtc3dmZy1lMTQ2NzViYS00NjhkLTQwOTEtOGY4Ny04N2IyNjM0ZmZiNzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.edZJS7b1XGHLx9t9mtT8mDSeY-AkNNs1hzbzeZPuexM/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aea58aba-e755-4b13-a11a-d99212f692fc/dfmswfg-e14675ba-468d-4091-8f87-87b2634ffb79.png');

      const embed2 = new EmbedBuilder()
      .setTitle('<:number_two:1064269451576492194> <a:pink_ribbon:1129402243662233670> • Respect the other users kinks;')
      .setDescription('✦ • ······················ • ✦ • ······················ • ✦\nPlease be respectful of what people are posting; if you don\'t like a kink, please ignore the art. Remember that now is required for you to put spoilers with trigger warning over unusual kinks such as watersports, scat, and anything else that might be suggestive for other users. <:pink_heart:980840966674055168>')
      .setColor('#FFD1D1')
      .setImage('https://images-ext-2.discordapp.net/external/3hznWfZfc0vhecIVlXdexf2OQHNGyWJ8G-_QWxrGMvM/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlYTU4YWJhLWU3NTUtNGIxMy1hMTFhLWQ5OTIxMmY2OTJmY1wvZGZtc3dmZy1lMTQ2NzViYS00NjhkLTQwOTEtOGY4Ny04N2IyNjM0ZmZiNzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.edZJS7b1XGHLx9t9mtT8mDSeY-AkNNs1hzbzeZPuexM/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aea58aba-e755-4b13-a11a-d99212f692fc/dfmswfg-e14675ba-468d-4091-8f87-87b2634ffb79.png');
      
      const embed3 = new EmbedBuilder()
      .setTitle('<:number_three:1064269462607511612> <a:pink_ribbon:1129402243662233670> • No young characters;')
      .setDescription('✦ • ······················ • ✦ • ······················ • ✦\nAs discord s TOS says, please be sure to not be uploading any NSFW art representing minors. If you use e621 check for "cub", "young", "teen", tags. SFW space means no one can be suspected of being attracted to minors too, and even though we know it\'s just art, please keep it away from this server. <:pink_heart:980840966674055168>')
      .setColor('#FFD1D1')
      .setImage('https://images-ext-2.discordapp.net/external/3hznWfZfc0vhecIVlXdexf2OQHNGyWJ8G-_QWxrGMvM/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlYTU4YWJhLWU3NTUtNGIxMy1hMTFhLWQ5OTIxMmY2OTJmY1wvZGZtc3dmZy1lMTQ2NzViYS00NjhkLTQwOTEtOGY4Ny04N2IyNjM0ZmZiNzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.edZJS7b1XGHLx9t9mtT8mDSeY-AkNNs1hzbzeZPuexM/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aea58aba-e755-4b13-a11a-d99212f692fc/dfmswfg-e14675ba-468d-4091-8f87-87b2634ffb79.png');
      const embed4 = new EmbedBuilder()
      .setTitle('<:number_four:1064269945434820740> <a:pink_ribbon:1129402243662233670> • NO irl NSFW;')
      .setDescription('✦ • ······················ • ✦ • ······················ • ✦\nRemember rule #6? these channels is where it applies in particular. Do not send any type of IRL video or picture, even if it s just a meme. This doesn\'t comprehends only humans. We are fine with furries but we will never be into IRL animals. <:pink_heart:980840966674055168>')
      .setColor('#FFD1D1')
      .setImage('https://images-ext-2.discordapp.net/external/3hznWfZfc0vhecIVlXdexf2OQHNGyWJ8G-_QWxrGMvM/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlYTU4YWJhLWU3NTUtNGIxMy1hMTFhLWQ5OTIxMmY2OTJmY1wvZGZtc3dmZy1lMTQ2NzViYS00NjhkLTQwOTEtOGY4Ny04N2IyNjM0ZmZiNzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.edZJS7b1XGHLx9t9mtT8mDSeY-AkNNs1hzbzeZPuexM/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aea58aba-e755-4b13-a11a-d99212f692fc/dfmswfg-e14675ba-468d-4091-8f87-87b2634ffb79.png');
      const embed5 = new EmbedBuilder()
      .setTitle('<:number_five:1064270720424751225> <a:pink_ribbon:1129402243662233670> • Do not creep people out;')
      .setDescription('✦ • ······················ • ✦ • ······················ • ✦\nRemember rule #4? it applies here too! if you see someone posting art or talking about sexual stuff, please do not think that\'s a reason to hit on them. There\'s no user here who is a sexual object; we are all people with feelings. Use common sense! <:pink_heart:980840966674055168>')
      .setColor('#FFD1D1')
      .setImage('https://images-ext-2.discordapp.net/external/3hznWfZfc0vhecIVlXdexf2OQHNGyWJ8G-_QWxrGMvM/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlYTU4YWJhLWU3NTUtNGIxMy1hMTFhLWQ5OTIxMmY2OTJmY1wvZGZtc3dmZy1lMTQ2NzViYS00NjhkLTQwOTEtOGY4Ny04N2IyNjM0ZmZiNzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.edZJS7b1XGHLx9t9mtT8mDSeY-AkNNs1hzbzeZPuexM/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aea58aba-e755-4b13-a11a-d99212f692fc/dfmswfg-e14675ba-468d-4091-8f87-87b2634ffb79.png');



module.exports = {
    name: 'nsfwrules',
    description: 'Send the nsfwrules to the chat',
    // devOnly: Boolean,
    testOnly: true,
    // options: Object[],
    // deleted: Boolean,
  
    
    
    
    callback: (client, interaction) => {
        interaction.reply({ embeds: [embed1,embed2,embed3,embed4,embed5] });
    }
  };