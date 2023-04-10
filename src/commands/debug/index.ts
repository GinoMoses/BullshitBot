import { category } from '../../utils';
import ping from './ping';
import clear from './clear';
import cat from './cat'
import dog from './dog'

export default category('Debug', [
    ping, 
    clear,
    cat,
    dog
])