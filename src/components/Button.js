// @flow
import React                                from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Text}                               from "react-native-elements";
import Icon                                 from 'react-native-vector-icons/FontAwesome';

export function Button(props: {
    onPress: any,
    iconName?: string,
    textStyle?: any,
    text: string,
    styleIcon?:any
}) {
    return (
        <TouchableOpacity
            style={styles.buttonText}
            onPress={props.onPress}
        >
            <View style={styles.container}>
                <Icon
                    style={props.styleIcon}
                    name={props.iconName}
                    size={20}
                    color="white"
                />
                <Text style={props.textStyle}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});