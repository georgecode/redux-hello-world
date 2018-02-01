import {  
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';


// actions >> reducers >> store



// actions.js
export const openMessage = message => ({  
  type: 'SHOW_MESSAGE',
  message,
});

export const closeMessage = () => ({  
  type: 'HIDE_MESSAGE',
});

// reducers.js
export const geod = (state = {}, action) => {  
  switch (action.type) {
    case 'SHOW_MESSAGE':
      return action.message;
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
