import {  
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

// actions.js
export const openMessage = geod => ({  
  type: 'SHOW_MESSAGE',
  geod,
});

export const closeGeod = () => ({  
  type: 'HIDE_MESSAGE',
});

// reducers.js
export const geod = (state = {}, action) => {  
  switch (action.type) {
    case 'SHOW_MESSAGE':
      return action.geod;
    case 'HIDE_MESSAGE':
      return {};
    default:
      return state;
  }
};

export const reducers = combineReducers({  
  geod,
});

// store.js
export function configureStore(initialState = {}) {  
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();  
