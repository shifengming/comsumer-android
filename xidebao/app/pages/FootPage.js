
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

class FootPage extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.txt1}>上午12:51:00</Text>
                <Text style={styles.txt2}>2020/2/5</Text>
                <Text style={styles.txt3}>Wednesday</Text>
                <Text style={styles.btn} onPress={() => {}}>触碰或刷卡</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(129, 211, 248, 1)'
    },
    txt1: {
        fontSize: 32
    },
    txt2: {
        fontSize: 18,
        marginTop: 15,
        marginBottom: 15
    },
    txt3: {
        fontSize: 24,
        marginBottom: 15
    },
    btn: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(76, 141, 174, 1)',
        color: '#ffffff'
    }
});

export const LayoutComponent= FootPage;
export function mapStateToProps(state) {
    return{
    }
}
