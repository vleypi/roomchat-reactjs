import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import profile from './actions/profile';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    profile
})
  

const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))

export default store