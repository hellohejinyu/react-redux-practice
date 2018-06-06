import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


function createStore(reducer) {
    let state = null
    let listeners = []
    const subscribe = (listener, id) => {
        listeners.push({listener, id})
    }
    const _unsafeRemoveSubscribe = (id) => {
        listeners = listeners.filter(i => i.id !== id)
    }
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener.listener())
    }
    dispatch({}) // 初始化 state
    return { getState, dispatch, subscribe, _unsafeRemoveSubscribe }
}

const themeReducer = (state, action) => {
    if (!state) {
        return {
            themeColor: 'red'
        }
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, themeColor: action.themeColor }
        default:
            return state
    }
}

const store = createStore(themeReducer)

const StoreContext = React.createContext({})

ReactDOM.render(<StoreContext.Provider value={store}>
    <App />
</StoreContext.Provider>, document.getElementById('root'));
registerServiceWorker();

export {
    StoreContext
}