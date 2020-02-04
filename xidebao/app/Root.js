import React,{Component} from 'react';
import StackNavigatorPage from './router/router'
/**
 * 添加redux支持
 */
import store from './store/store';
import {Provider} from 'react-redux';
import connectComponent from './reduxConnect/connectComponent';
const App = connectComponent(StackNavigatorPage);

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
module.exports=Root;
