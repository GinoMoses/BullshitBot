import { category } from '../../utils';
import ping from './ping';
import clear from './clear';
import cat from './cat'
import dog from './dog'
import invite from './invite'
import wikirandom from './wikirandom'
import weather from './weather'

export default category('Debug', [
    ping, 
    clear,
    cat,
    dog,
    invite,
    wikirandom,
    weather
])