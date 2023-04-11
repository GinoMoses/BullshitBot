import { SlashCommandBuilder } from "discord.js";
import { command } from '../../utils';

const meta = new SlashCommandBuilder()
    .setName('invite')
    .setDescription('sends the invite link for the bot!')

export default command(meta, ({ interaction }) => {
    interaction.reply("https://discord.com/api/oauth2/authorize?client_id=988897984437694464&permissions=1514449923159&scope=bot%20applications.commands");
})