const { Schema, model, Error } = require('mongoose');

const welcomeChannelSchema = new Schema({
    guildId: {
        type: String,
        required: true,
    },
    channelId: {
        type: String,
        required: true,
        validate: {
            validator: async function (value) {
                const existingChannel = await WelcomeChannel.findOne({ channelId: value, guildId: { $ne: this.guildId } });
                if (existingChannel) {
                    throw new Error('Channel ID is already in use by another server.');
                }
                return true;
            },
            message: 'Channel ID is already in use by another server.',
        },
    },
    customMessage: {
        type: String,
        default: null,
    },
}, 
{ timestamps: true }
);

module.exports = model('WelcomeChannel', welcomeChannelSchema);