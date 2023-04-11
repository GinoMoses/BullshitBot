import { SlashCommandBuilder, PermissionFlagsBits, GatewayIntentBits, ActivityType } from "discord.js";
import { command } from '../../utils';
import Status from '../../models/statusSchema';

const allowedIds = ['389021335285661707'];

const meta = new SlashCommandBuilder()
    .setName('presence')
    .setDescription(`Sets the presence`)
        .addStringOption(option =>    
            option.setName('type')
                .setDescription('the type of activity')
                .setRequired(true)
                .addChoices(
                        { name: 'Playing', value: "Playing" },
                        { name: 'Streaming', value: "Streaming" },
                        { name: 'Listening', value: "Listening" },
                        { name: 'Watching', value: "Watching" },
                        { name: 'Competing', value: "Competing" }
                        ))
        .addStringOption(option =>
            option.setName('status')
            .setDescription('the status')
            .setRequired(true))                    
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)

export default command(meta, async ({ interaction, client }) => {
    if (!allowedIds.includes(interaction.user.id)) {
        interaction.reply({ content: 'Usage of this command is restricted to the bot owner! (in short: fuck you)', ephemeral: true });
    } else {
        const status = interaction.options.getString("status")!;
        const type = interaction.options.getString("type");
        
        // This sucks dick real hard! Gonna add 'ActivityType' to the database one day
        await Status.findOneAndUpdate({  }, {status: status, type: type }, { upsert: true })
        switch(type) {
            case "Playing":
                client.user!.setPresence({ activities: [{ name:status, type:ActivityType.Playing}], status: "online"});
                break;
            case "Streaming":
                client.user!.setPresence({ activities: [{ name:status, type:ActivityType.Streaming, url: `https://www.twitch.tv/itsgino_` }], status: "online"});
                break;
            case "Competing":
                client.user!.setPresence({ activities: [{ name:status, type:ActivityType.Competing}], status: "online"});	
                break;
            case "Listening":
                client.user!.setPresence({ activities: [{ name:status, type:ActivityType.Listening}], status: "online"});
                break;
            case "Watching":
                client.user!.setPresence({ activities: [{ name:status, type:ActivityType.Watching}], status: "online"});
                break;
        }
        return interaction.reply({ content: `Status successfully updated. Type: **${type}** Content: **${status}**`, ephemeral:true })
    }
})
