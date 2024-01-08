require('dotenv').config();
const { IntentsBitField, EmbedBuilder } = require('discord.js');


      const embed1 = new EmbedBuilder()
      .setTitle('<:number_one:1064269439257813002> <a:pink_ribbon:1129402243662233670> • No spam or self-promotions;')
      .setDescription('✦ • ······················ • ✦ • ······················ • ✦\nPlease refrain from sending unsolicited messages or promoting your server, product, company, or any other content in the channels or DMs. We kindly request that you utilize the designated "your channels" section, such as <#1018089154388693023> or <#834894807750410250>, where you are welcome to showcase your creative endeavors. <a:pink_sparkles2:1129402249903349871>')
      .setColor('#FFD1D1')
      .setImage('https://images-ext-2.discordapp.net/external/3hznWfZfc0vhecIVlXdexf2OQHNGyWJ8G-_QWxrGMvM/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlYTU4YWJhLWU3NTUtNGIxMy1hMTFhLWQ5OTIxMmY2OTJmY1wvZGZtc3dmZy1lMTQ2NzViYS00NjhkLTQwOTEtOGY4Ny04N2IyNjM0ZmZiNzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.edZJS7b1XGHLx9t9mtT8mDSeY-AkNNs1hzbzeZPuexM/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aea58aba-e755-4b13-a11a-d99212f692fc/dfmswfg-e14675ba-468d-4091-8f87-87b2634ffb79.png');

      const embed2 = new EmbedBuilder()
      .setTitle('<:number_two:1064269451576492194> <a:pink_ribbon:1129402243662233670> • Treat everyone with respect;')
      .setDescription('✦ • ······················ • ✦ • ······················ • ✦\nWe maintain a zero-tolerance policy towards harassment, sexism, overly offensive language, racism, hate speech, and similar behavior. In order to ensure a respectful environment, an automated moderation system is in place to deter the use of such inappropriate language. Any attempts to circumvent this system by altering characters in offensive words will result in a warning. Let\'s uphold a positive and supportive community for our furry family. <a:pink_sparkles2:1129402249903349871>')
      .setColor('#FFD1D1')
      .setImage('https://images-ext-2.discordapp.net/external/3hznWfZfc0vhecIVlXdexf2OQHNGyWJ8G-_QWxrGMvM/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlYTU4YWJhLWU3NTUtNGIxMy1hMTFhLWQ5OTIxMmY2OTJmY1wvZGZtc3dmZy1lMTQ2NzViYS00NjhkLTQwOTEtOGY4Ny04N2IyNjM0ZmZiNzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.edZJS7b1XGHLx9t9mtT8mDSeY-AkNNs1hzbzeZPuexM/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aea58aba-e755-4b13-a11a-d99212f692fc/dfmswfg-e14675ba-468d-4091-8f87-87b2634ffb79.png');
      
      const embed3 = new EmbedBuilder()
      .setTitle('<:number_three:1064269462607511612> <a:pink_ribbon:1129402243662233670> • Do not start drama;')
      .setDescription('✦ • ······················ • ✦ • ······················ • ✦\n...or at least keep it in your DMs. If you encounter any discomfort caused by another member, we recommend utilizing the /report command or engaging in a direct conversation with us so we can talk about it. Our community upholds a commitment to fostering a positive atmosphere, and we have a strict policy against any form of toxicity, from both sides. <a:pink_sparkles2:1129402249903349871>')
      .setColor('#FFD1D1')
      .setImage('https://images-ext-2.discordapp.net/external/3hznWfZfc0vhecIVlXdexf2OQHNGyWJ8G-_QWxrGMvM/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlYTU4YWJhLWU3NTUtNGIxMy1hMTFhLWQ5OTIxMmY2OTJmY1wvZGZtc3dmZy1lMTQ2NzViYS00NjhkLTQwOTEtOGY4Ny04N2IyNjM0ZmZiNzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.edZJS7b1XGHLx9t9mtT8mDSeY-AkNNs1hzbzeZPuexM/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aea58aba-e755-4b13-a11a-d99212f692fc/dfmswfg-e14675ba-468d-4091-8f87-87b2634ffb79.png');
      const embed4 = new EmbedBuilder()
      .setTitle('<:number_four:1064269945434820740> <a:pink_ribbon:1129402243662233670> • Do not be a creep;')
      .setDescription('✦ • ······················ • ✦ • ······················ • ✦\nPlease refrain from sharing NSFW art with individuals who have not expressly requested it, and avoid making unsolicited NSFW comments or ask to strangers if they want to engage you in Erotic Roleplay, even if it s an adult-to-adult conversation. It is recommended by us that discussions of this nature be reserved for individuals with whom you share a closer relationship. <a:pink_sparkles2:1129402249903349871>')
      .setColor('#FFD1D1')
      .setImage('https://images-ext-2.discordapp.net/external/3hznWfZfc0vhecIVlXdexf2OQHNGyWJ8G-_QWxrGMvM/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlYTU4YWJhLWU3NTUtNGIxMy1hMTFhLWQ5OTIxMmY2OTJmY1wvZGZtc3dmZy1lMTQ2NzViYS00NjhkLTQwOTEtOGY4Ny04N2IyNjM0ZmZiNzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.edZJS7b1XGHLx9t9mtT8mDSeY-AkNNs1hzbzeZPuexM/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aea58aba-e755-4b13-a11a-d99212f692fc/dfmswfg-e14675ba-468d-4091-8f87-87b2634ffb79.png');
      const embed5 = new EmbedBuilder()
      .setTitle('<:number_five:1064270720424751225> <a:pink_ribbon:1129402243662233670> • Talk in english;')
      .setDescription('✦ • ······················ • ✦ • ······················ • ✦\nOur server operates exclusively in English. As our community is comprised of individuals from diverse countries, communicating in a common language ensures inclusivity and mutual understanding. Speaking in another language may lead to miscommunication and would be considered impolite. Additionally, maintaining a single language streamlines our moderation efforts. We want to reassure you that grammatical correctness and pronunciation perfection are not prerequisites here; your participation is valued and appreciated regardless. <a:pink_sparkles2:1129402249903349871>')
      .setColor('#FFD1D1')
      .setImage('https://images-ext-2.discordapp.net/external/3hznWfZfc0vhecIVlXdexf2OQHNGyWJ8G-_QWxrGMvM/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlYTU4YWJhLWU3NTUtNGIxMy1hMTFhLWQ5OTIxMmY2OTJmY1wvZGZtc3dmZy1lMTQ2NzViYS00NjhkLTQwOTEtOGY4Ny04N2IyNjM0ZmZiNzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.edZJS7b1XGHLx9t9mtT8mDSeY-AkNNs1hzbzeZPuexM/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aea58aba-e755-4b13-a11a-d99212f692fc/dfmswfg-e14675ba-468d-4091-8f87-87b2634ffb79.png');
      const embed6 = new EmbedBuilder()
      .setTitle('<:number_six:1064271062956773466> <a:pink_ribbon:1129402243662233670> • NO irl NSFW and NO irl gore;')
      .setDescription('✦ • ······················ • ✦ • ······················ • ✦\nIn NSFW channels, this server is a secure environment that is free from real-life content. We kindly request that you only share wholesome SFW selfies with your furry companions. <a:pink_sparkles2:1129402249903349871>')
      .setColor('#FFD1D1')
      .setImage('https://images-ext-2.discordapp.net/external/3hznWfZfc0vhecIVlXdexf2OQHNGyWJ8G-_QWxrGMvM/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlYTU4YWJhLWU3NTUtNGIxMy1hMTFhLWQ5OTIxMmY2OTJmY1wvZGZtc3dmZy1lMTQ2NzViYS00NjhkLTQwOTEtOGY4Ny04N2IyNjM0ZmZiNzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.edZJS7b1XGHLx9t9mtT8mDSeY-AkNNs1hzbzeZPuexM/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aea58aba-e755-4b13-a11a-d99212f692fc/dfmswfg-e14675ba-468d-4091-8f87-87b2634ffb79.png');
      const embed7 = new EmbedBuilder()
      .setTitle('<:number_seven:1064273724989259776> <a:pink_ribbon:1129402243662233670> • Safe space for __minors__ and adults;')
      .setDescription('✦ • ······················ • ✦ • ······················ • ✦\nThis server is designed to provide a safe and inclusive environment for individuals of all ages, encompassing both minors and adults. We kindly request that you exercise proper usage of text channels. Refrain from sharing NSFW jokes in spaces intended for SFW content, and avoid distributing explicit art in the presence of minors. This also means your nickname, pfp and banner must be SFW. <a:pink_sparkles2:1129402249903349871>')
      .setColor('#FFD1D1')
      .setImage('https://images-ext-2.discordapp.net/external/3hznWfZfc0vhecIVlXdexf2OQHNGyWJ8G-_QWxrGMvM/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlYTU4YWJhLWU3NTUtNGIxMy1hMTFhLWQ5OTIxMmY2OTJmY1wvZGZtc3dmZy1lMTQ2NzViYS00NjhkLTQwOTEtOGY4Ny04N2IyNjM0ZmZiNzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.edZJS7b1XGHLx9t9mtT8mDSeY-AkNNs1hzbzeZPuexM/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aea58aba-e755-4b13-a11a-d99212f692fc/dfmswfg-e14675ba-468d-4091-8f87-87b2634ffb79.png');
      const embed8 = new EmbedBuilder()
      .setTitle('<:number_eight:1064275318556327976> <a:pink_ribbon:1129402243662233670> • Do not lie about your age;')
      .setDescription('✦ • ······················ • ✦ • ······················ • ✦\nGiven that we welcome both minors and adults, it is advisable to be truthful about your age. Our intention is to safeguard you from the potential risks of the online realm. Consequently, please be aware that minors are prohibited from accessing NSFW art, in compliance with Discord\'s Terms of Service. If we catch you up lying on your age we will ban you without warns. Our server operates on a foundation of trust, and we maintain a strict stance against dishonesty. <a:pink_sparkles2:1129402249903349871>')
      .setColor('#FFD1D1')
      .setImage('https://images-ext-2.discordapp.net/external/3hznWfZfc0vhecIVlXdexf2OQHNGyWJ8G-_QWxrGMvM/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlYTU4YWJhLWU3NTUtNGIxMy1hMTFhLWQ5OTIxMmY2OTJmY1wvZGZtc3dmZy1lMTQ2NzViYS00NjhkLTQwOTEtOGY4Ny04N2IyNjM0ZmZiNzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.edZJS7b1XGHLx9t9mtT8mDSeY-AkNNs1hzbzeZPuexM/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aea58aba-e755-4b13-a11a-d99212f692fc/dfmswfg-e14675ba-468d-4091-8f87-87b2634ffb79.png');
      const embed9 = new EmbedBuilder()
      .setTitle('<:number_nine:1064275333655834664> <a:pink_ribbon:1129402243662233670> • Respect discord\'s will;')
      .setDescription('✦ • ······················ • ✦ • ······················ • ✦\nThis means you have to follow perfectly discord s TOS and its community guidelines. No slurs, no flirting with minors if you re an adult, and everything else it says, just peace. <a:pink_sparkles2:1129402249903349871>')
      .setColor('#FFD1D1')
      .setImage('https://images-ext-2.discordapp.net/external/3hznWfZfc0vhecIVlXdexf2OQHNGyWJ8G-_QWxrGMvM/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlYTU4YWJhLWU3NTUtNGIxMy1hMTFhLWQ5OTIxMmY2OTJmY1wvZGZtc3dmZy1lMTQ2NzViYS00NjhkLTQwOTEtOGY4Ny04N2IyNjM0ZmZiNzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.edZJS7b1XGHLx9t9mtT8mDSeY-AkNNs1hzbzeZPuexM/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aea58aba-e755-4b13-a11a-d99212f692fc/dfmswfg-e14675ba-468d-4091-8f87-87b2634ffb79.png');
      const embed10 = new EmbedBuilder()
      .setTitle('<:number_one:1064269439257813002><:number_zero:1064269428625264761> <a:pink_ribbon:1129402243662233670> • Server is not meant for RP or dating;')
      .setDescription('✦ • ······················ • ✦ • ······················ • ✦\nThis is not a dating or a roleplay server. Do not join with the purpose of finding a partner or someone to rp with, consider this not only in our chatrooms but also in DMs with our members. This server is meant to be a family, friends. Finding love is something that may happen, but maybe don\'t go to every single member of the server to cry for a partner. <a:pink_sparkles2:1129402249903349871>')
      .setColor('#FFD1D1')
      .setImage('https://images-ext-2.discordapp.net/external/3hznWfZfc0vhecIVlXdexf2OQHNGyWJ8G-_QWxrGMvM/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlYTU4YWJhLWU3NTUtNGIxMy1hMTFhLWQ5OTIxMmY2OTJmY1wvZGZtc3dmZy1lMTQ2NzViYS00NjhkLTQwOTEtOGY4Ny04N2IyNjM0ZmZiNzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.edZJS7b1XGHLx9t9mtT8mDSeY-AkNNs1hzbzeZPuexM/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aea58aba-e755-4b13-a11a-d99212f692fc/dfmswfg-e14675ba-468d-4091-8f87-87b2634ffb79.png');
      



module.exports = {
    name: 'rules',
    description: 'Send the rules to the chat',
    // devOnly: Boolean,
    testOnly: true,
    // options: Object[],
    // deleted: Boolean,
  
    
    
    
    callback: (client, interaction) => {
        interaction.reply({ embeds: [embed1,embed2,embed3,embed4,embed5,embed6,embed7,embed8,embed9,embed10,] });
    }
  };