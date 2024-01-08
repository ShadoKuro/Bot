module.exports = {
    name: 'verificatio-tiuck',
    description: 'Pong!',
    // devOnly: Boolean,
    testOnly: true,
    // options: Object[],
     deleted: true,
  
    callback: (client, interaction) => {
      interaction.reply(`Pong! ${client.ws.ping}ms`);
    },
  };