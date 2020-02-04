
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

class FootPage extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={styles.container}>
                <Text>test</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export const LayoutComponent= FootPage;
export function mapStateToProps(state) {
    return{
    }
}
