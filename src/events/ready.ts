import { ActivityType } from 'discord.js'
import { event } from '../utils';
import mongoose from 'mongoose';
import Status from '../models/statusSchema';

export default event('ready', async ({ log }, client) => {
    log(`${client.user.tag} logged in!`);

    // MongoDB
    await mongoose.connect(process.env.dbURI!).then(() =>
		log('Connected to DB'))
		.catch((err) => console.log(err));

        // and bot presence
    Status.findOne().then(result => {
        let botStatus = result!.status;
        let botStatusType = result!.type;

        // This sucks dick real hard! Gonna add 'ActivityType' to the database one day

        switch(botStatusType) {
            case "Playing":
                client.user.setPresence({ activities: [{ name:botStatus, type:ActivityType.Playing}], status: "online"});
                break;
            case "Streaming":
                client.user.setPresence({ activities: [{ name:botStatus, type:ActivityType.Streaming, url: `https://www.twitch.tv/itsgino_` }], status: "online"});
                break;
            case "Competing":
                client.user.setPresence({ activities: [{ name:botStatus, type:ActivityType.Competing}], status: "online"});	
                break;
            case "Listening":
                client.user.setPresence({ activities: [{ name:botStatus, type:ActivityType.Listening}], status: "online"});
                break;
            case "Watching":
                client.user.setPresence({ activities: [{ name:botStatus, type:ActivityType.Watching}], status: "online"});
                break;
        }
    });

    // ping command lmao

    client.on('messageCreate', async message => {
        if(message.content === 'cockandballs') {
            message.channel.send(`cock and balls 🗿🗿🗿 \n\n client latency: \`${Date.now() - message.createdTimestamp}ms\`, \n Websocket Latency: \`${Math.round(client.ws.ping)}ms\``);
	    }
    });
})