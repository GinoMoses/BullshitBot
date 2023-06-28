import { event } from '../utils';
import { TextChannel } from 'discord.js';
import schedule from 'node-schedule';

export default event('ready', async ({ log }, client) => {
    const weekDays = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
    const targetChannel = client.channels.cache.get("991707404209229865")! as TextChannel; 

    for(let i = 0; i < 7; i++) {
        const rule = new schedule.RecurrenceRule();
        rule.dayOfWeek = i;
        rule.hour = 0;
        rule.tz = 'CET';
        const job = schedule.scheduleJob(rule, async function() {
            let deleted: any;
            do {
                deleted = (targetChannel).bulkDelete(100);
            } while (deleted.size != 0);
            await (targetChannel).setName(`${weekDays[i]}`);
            await (targetChannel).send({ files: [`assets/${weekDays[i]}.png`] });
        });		
    }
})