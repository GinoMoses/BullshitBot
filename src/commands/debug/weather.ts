import { SlashCommandBuilder, EmbedBuilder, RESTGetAPIGuildWidgetJSONResult } from "discord.js";
import { command } from '../../utils';

const meta = new SlashCommandBuilder()
    .setName('weather')
    .setDescription('check the weather anywhere in the world!')
    .addStringOption(option =>
        option.setName('city')
            .setDescription('Boston, New York..')
            .setRequired(true))

export default command(meta, async ({ interaction }) => {
    let weather = {
        city: interaction.options.getString("city")!.toLowerCase(),
        apiKey: process.env.weatherKey,
        fetchWeather: function() {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`
            )
                .then((response) => {
                    try {
                        if (!response.ok) {
                            interaction.reply({ content: "No weather found.", ephemeral: true });
                        }
                        return response.json();
                    } catch (error) {
                        console.log(error);
                    }
                })
                .then((data) => this.displayWeather(data));
        },
        displayWeather: function(data: any) {
            try {
                const { name } = data;
                const { icon, description } = data.weather[0];
                const { temp, humidity } = data.main;
                const { speed } = data.wind;
                const weatherIcon = `https://openweathermap.org/img/wn/${icon}@4x.png`
                const weatherEmbed = new EmbedBuilder()
                    .setColor(0x338bff)
                    .setTitle(`Weather in ${name}`)
                    .setDescription(description)
                    .addFields(
                        { name: 'Temperature', value: temp.toString() + '°C', inline: true },
                        { name: 'Humidity', value: humidity.toString() + '%', inline: true },
                        { name: 'Wind speed', value: speed.toString() + ' km/h', inline: true },
                    )
                    .setThumbnail(weatherIcon)
                    .setTimestamp()
                    .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() });
                interaction.reply({ embeds: [weatherEmbed] });
            } catch (error) {
                console.log(error);
            }
        }
    };
    weather.fetchWeather();
} )