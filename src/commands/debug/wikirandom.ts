import { SlashCommandBuilder } from "discord.js";
import wiki from 'wikipedia';
import { command } from '../../utils';

const meta = new SlashCommandBuilder()
    .setName('wikirandom')
    .setDescription('Random wikipedia article!')
    .addStringOption(option =>
        option.setName('language')
        .setDescription('pl, fr, de...')
        .setRequired(false))
export default command(meta, async ({ interaction }) => {
    const languages = await wiki.languages();
    if(interaction.options.getString('language')==null) {
        wiki.setLang('en');
        const randomSummary: any = await wiki.random();
        await interaction.reply(randomSummary.content_urls.desktop.page); 
    } else {
        const language = interaction.options.getString('language')!.toLowerCase();
        function verify(lang: string): boolean {
            for(let i=0;i<languages.length;i++){
                if(languages[i][lang] != undefined) {
                    return true;
                }
            }
            return false;
        }   
        if(verify(language)) {
            wiki.setLang(language);
            const randomSummary: any = await wiki.random();
            interaction.reply(randomSummary.content_urls.desktop.page); 
        } else {
            interaction.reply({ content:'Provided language code is invalid!', ephemeral:true });
        }
    }
})