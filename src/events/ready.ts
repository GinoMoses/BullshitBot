import { event } from '../utils';

export default event('ready', ({ log }, client) => {
    log(`${client.user.tag} logged in!`)
})