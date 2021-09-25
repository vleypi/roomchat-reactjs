import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'

import profile from './actions/profile';

const reducers = combineReducers({
    profile
})
  

const store = createStore(reducers,compose(applyMiddleware(thunk)))

export default store