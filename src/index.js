import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from './react-redux'
import { Provider } from './react-redux'

const themeReducer = (state, action) => {
    if (!state) {
        return {
            themeColor: 'red'
        }
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, themeColor: action.themeColor }
        case 'test':
            return { ...state, value: new Date().getTime() }
        default:
            return state
    }
}

const store = createStore(themeReducer)

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
