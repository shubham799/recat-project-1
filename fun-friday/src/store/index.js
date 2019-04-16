import {createStore, applyMiddleware, compose} from 'redux';
import reducers from '../reducer';
import {loadState,saveState} from './localStorage';

const configureStore = ()=>{

    const persistedState = loadState();
  
    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
      reducers,
      persistedState
    //   composeEnhancers(applyMiddleware(thunk, unauthorizedAccessMiddleWare))
    )
  
    store.subscribe(
      ()=>{
        let state = {
          registerdUsers : store.getState().registerdUsers,
         
        }
        saveState(state)
      });
  
    return store
  }

  export default configureStore;