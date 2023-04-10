import { SlashCommandBuilder } from "discord.js";
import { command } from '../../utils';

const meta = new SlashCommandBuilder()
    .setName('cat')
    .setDescription('Sends a picture of a cat!')

export default command(meta, async ({ interaction }) => {
    try {
        let image;
        const cat = {
            fetchCat: async function () {
                fetch(`https://api.thecatapi.com/v1/images/search`)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("There was an error.");
                        }
                        return response.json();
                    })
                    .then((data) => {
                        image = data[0].url;
                        interaction.reply({ files: [{ attachment: image, name: "EL_GATO.jpg" }], ephemeral: false });
                    });
            },
        };
        cat.fetchCat();
    } catch (err) {
        console.log("Something Went Wrong => ", err);
    }
})