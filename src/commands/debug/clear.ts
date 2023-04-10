import { SlashCommandBuilder, PermissionFlagsBits, GuildTextBasedChannel } from "discord.js";
import { command } from '../../utils';

const meta = new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Clears the chat')
    .addNumberOption(option =>
        option.setName('amount')
        .setDescription('amount of messages (max 99)')
        .setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)

export default command(meta, async ({ interaction }) => {
        const amount = interaction.options.getNumber('amount');
        const channel = interaction.channel;
        if(amount! > 100 || amount! <= 0) {
            interaction.reply(`Amount cannot exceed 100 and cannot be under 1.`)
        } else {
            await (channel! as GuildTextBasedChannel).bulkDelete(amount!, true)
            .then(() => {
                return interaction.reply({
                    ephemeral: true,
                    embeds: [{
                        color: 0x00ff00,
                        description: `Successfully deleted ${amount} messages`
                    }]
                })
            });
        }
} )