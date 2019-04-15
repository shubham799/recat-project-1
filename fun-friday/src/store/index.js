import {createStore, applyMiddleware, compose} from 'redux';
import reducers from '../reducer';
import {saveState} from './localStorage';

const configureStore = (initialState)=>{

    // const persistedState = loadState();
  
    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
      reducers,
      initialState
    //   persistedState
    //   composeEnhancers(applyMiddleware(thunk, unauthorizedAccessMiddleWare))
    )
  
    store.subscribe(
      ()=>{
        let state = {
          userInfo : store.getState().register,
         
        }
        saveState(state)
      });
  
    return store
  }

  export default configureStore;