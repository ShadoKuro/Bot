require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!',
    }, 
    {
        name: 'ping',
        description: 'Pong!',
    },
    {
        name: 'embed',
        description: 'Sends an embed!',
    },
    {
        name: 'send',
        description: 'send a dm',
        options: [
            {
                name: 'user',
                description: 'Username',
                type: ApplicationCommandOptionType.User,
                required: true,
            }, 
            {
                name: 'string',
                description: 'txt',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ]
    },
];

const rest = new REST({ VERSION: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        );

        console.log('Slash commands were registered successfully!');
       }  catch (error) {
        console.log(`There was an error: ${error}`);
    } 
}) ();