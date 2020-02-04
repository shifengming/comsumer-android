import {createAppContainer,createStackNavigator} from 'react-navigation';

import MainPage from '../pages/FootPage'
import DetailPage from "../pages/Test";

const AppNavigator = createStackNavigator({
        MainPage: MainPage,
        DetailPage:DetailPage
    },{
        initialRouteName: "MainPage",
    },
);
export default createAppContainer(AppNavigator);
