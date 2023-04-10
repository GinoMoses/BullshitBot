import { SlashCommandBuilder } from "discord.js";
import { command } from '../../utils';

const meta = new SlashCommandBuilder()
    .setName('dog')
    .setDescription('Sends a picture of a dog!')

export default command(meta, async ({ interaction }) => {
    try {
        let image;
        const dog = {
            fetchDog: async function () {
                fetch(`https://api.thedogapi.com/v1/images/search`)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("There was an error.");
                        }
                        return response.json();
                    })
                    .then((data) => {
                        image = data[0].url;
                        interaction.reply({ files: [{ attachment: image, name: "DER_HUND.jpg" }], ephemeral: false });
                    });
            },
        };
        dog.fetchDog();
    } catch (err) {
        console.log("Something Went Wrong => ", err);
    }
})