import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer/index';


const middleware = applyMiddleware(thunk);

export default createStore(reducers, middleware);