import { SlashCommandBuilder } from "discord.js";
import { command } from '../../utils';

const meta = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Latency or whatever')

export default command(meta, async ({ interaction }) => {
    const mesg = await interaction.reply({ content: "Pong!", fetchReply: true });
    await interaction.editReply({ content: `🏓 Pong!\n\nBot Latency: \`${mesg.createdTimestamp - interaction.createdTimestamp}ms\`, \nWebsocket Latency: \`${interaction.client.ws.ping}ms\`` });
} )