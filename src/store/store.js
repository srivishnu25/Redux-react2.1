import {createStore} from 'redux';
import Reducers  from '../reducer/reducer';
const configureStore = createStore(Reducers);

export default configureStore;