import { combineReducers } from 'redux';
import user from './user_reducer';
import counter from "./counter_reducer"
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const counterPersistConfig = {
    key: 'counter',
    storage
};

const userPersistConfig = {
    key: 'user',
    storage
};

const rootReducer = combineReducers({
    user: persistReducer(userPersistConfig, user),
    counter: persistReducer(counterPersistConfig, counter)
});

export default rootReducer;