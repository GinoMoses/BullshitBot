import { event } from "../utils";
import { TextChannel } from "discord.js";
import schedule from "node-schedule";

export default event("ready", async ({ log }, client) => {
    // to anyone reading this, this is a mess, i know, but it works, so i'm not touching it <- suggested by github copilot btw
    // forgive me please

    const rule = new schedule.RecurrenceRule();
    rule.hour = 0;
    rule.minute = 0
    rule.dayOfWeek = 1;
    rule.tz = "CET";
    const job = schedule.scheduleJob(rule, async function () {
        let deleted;
        do {
            deleted = await (
                client.channels.cache.get("991707404209229865")! as TextChannel
            ).bulkDelete(100);
        } while (deleted.size != 0);
        await (
            client.channels.cache.get("991707404209229865")! as TextChannel
        ).setName("poniedziałek");
        await (
            client.channels.cache.get("991707404209229865")! as TextChannel
        ).send({ files: ["assets/poniedzialek.png"] });
    });
    const rule2 = new schedule.RecurrenceRule();
    rule2.hour = 0;
    rule2.minute = 0;
    rule2.dayOfWeek = 2;
    rule2.tz = "CET";
    const job2 = schedule.scheduleJob(rule2, async function () {
        let deleted;
        do {
            deleted = await (
                client.channels.cache.get("991707404209229865")! as TextChannel
            ).bulkDelete(100);
        } while (deleted.size != 0);
        await (
            client.channels.cache.get("991707404209229865")! as TextChannel
        ).setName("wtorek");
        await (
            client.channels.cache.get("991707404209229865")! as TextChannel
        ).send({ files: ["assets/wtorek.png"] });
    });
    const rule3 = new schedule.RecurrenceRule();
    rule3.hour = 0;
    rule3.minute = 0;
    rule3.dayOfWeek = 3;
    rule3.tz = "CET";
    const job3 = schedule.scheduleJob(rule3, async function () {
        let deleted;
        do {
            deleted = await (
                client.channels.cache.get("991707404209229865")! as TextChannel
            ).bulkDelete(100);
        } while (deleted.size != 0);
        await (
            client.channels.cache.get("991707404209229865")! as TextChannel
        ).setName("środa");
        await (
            client.channels.cache.get("991707404209229865")! as TextChannel
        ).send({ files: ["assets/sroda.png"] });
    });
    const rule4 = new schedule.RecurrenceRule();
    rule4.hour = 0;
    rule4.minute = 0;
    rule4.dayOfWeek = 4;
    rule4.tz = "CET";
    const job4 = schedule.scheduleJob(rule4, async function () {
        let deleted;
        do {
            deleted = await (
                client.channels.cache.get("991707404209229865")! as TextChannel
            ).bulkDelete(100);
        } while (deleted.size != 0);
        await (
            client.channels.cache.get("991707404209229865")! as TextChannel
        ).setName("czwartek");
        await (
            client.channels.cache.get("991707404209229865")! as TextChannel
        ).send({ files: ["assets/czwartek.png"] });
    });
    const rule5 = new schedule.RecurrenceRule();
    rule5.hour = 0;
    rule5.minute = 0;
    rule5.dayOfWeek = 5;
    rule5.tz = "CET";
    const job5 = schedule.scheduleJob(rule5, async function () {
        let deleted;
        do {
            deleted = await (
                client.channels.cache.get("991707404209229865")! as TextChannel
            ).bulkDelete(100);
        } while (deleted.size != 0);
        await (
            client.channels.cache.get("991707404209229865")! as TextChannel
        ).setName("piątek");
        await (
            client.channels.cache.get("991707404209229865")! as TextChannel
        ).send({ files: ["assets/piatek.png"] });
    });
    const rule6 = new schedule.RecurrenceRule();
    rule6.hour = 0;
    rule6.minute = 0;
    rule6.dayOfWeek = 6;
    rule6.tz = "CET";
    const job6 = schedule.scheduleJob(rule6, async function () {
        let deleted;
        do {
            deleted = await (
                client.channels.cache.get("991707404209229865")! as TextChannel
            ).bulkDelete(100);
        } while (deleted.size != 0);
        await (
            client.channels.cache.get("991707404209229865")! as TextChannel
        ).setName("sobota");
        await (
            client.channels.cache.get("991707404209229865")! as TextChannel
        ).send({ files: ["assets/sobota.png"] });
    });
    const rule7 = new schedule.RecurrenceRule();
    rule7.hour = 0;
    rule7.minute = 0;
    rule7.dayOfWeek = 0;
    rule7.tz = "CET";
    const job7 = schedule.scheduleJob(rule7, async function () {
        let deleted;
        do {
            deleted = await (
                client.channels.cache.get("991707404209229865")! as TextChannel
            ).bulkDelete(100);
        } while (deleted.size != 0);
        await (
            client.channels.cache.get("991707404209229865")! as TextChannel
        ).setName("niedziela");
        await (
            client.channels.cache.get("991707404209229865")! as TextChannel
        ).send({ files: ["assets/niedziela.png"] });
    });
});
