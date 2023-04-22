import { Client, GatewayIntentBits } from 'discord.js';
import keys from '../keys';
import { registerEvents } from '../utils';
import events from '../events';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
    ]
});

registerEvents(client, events);

client.login(keys.clientToken)
    .catch((err) => {
        console.error("Error", err);
        process.exit(1)
    });