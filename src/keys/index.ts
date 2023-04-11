import { Keys } from '../types';

const keys: Keys = {
    clientToken: process.env.clientToken ?? 'nil',
    testGuild: process.env.testGuild ?? 'nil',
    weatherKey: process.env.weatherKey ?? 'nil'
};

if (Object.values(keys).includes('nil'))
    throw new Error("Not all ENV variables are defined");

export default keys;