require('dotenv').config();
const { IntentsBitField, ActivityType } = require('discord.js');


let status = [
  {
    name: 'Performing Ascend Follower Ritual',
    type: ActivityType.Custom,
  },
  {
    name: 'Performing Ritual of Enrichment',
    type: ActivityType.Custom,
  },
  {
    name: 'Performing Sacrifice of the flesh',
    type: ActivityType.Custom,
  },
  {
    name: 'Performing Brainwashing Ritual',
    type: ActivityType.Custom,
  },
];

module.exports = (client) => {
  console.log(`${client.user.tag} is online.`);

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 10000);
};
