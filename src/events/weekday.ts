import { event } from '../utils';
import { TextChannel } from 'discord.js';
import schedule from 'node-schedule';

export default event('ready', async ({ log }, client) => {
    const weekDays = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];

    const rule = new schedule.RecurrenceRule();
	rule.hour = 0;
	rule.minute = 1;
	rule.tz = 'CET';
	const job = schedule.scheduleJob(rule, async function() {
        let deleted: any;
        do {
            deleted = (await client.channels.cache.get("991707404209229865")! as TextChannel).bulkDelete(100);
        } while (deleted.size != 0);
        await (client.channels.cache.get("991707404209229865")! as TextChannel).setName(`${weekDays[new Date().getDay()]}`)
        await (client.channels.cache.get("991707404209229865")! as TextChannel).send({ files: [`assets/${weekDays[new Date().getDay()]}.png`] });
    });		
})